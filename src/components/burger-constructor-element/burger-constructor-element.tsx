import { useRef } from "react";
import { useDispatch } from "../../services/hooks";
import { useDrop, useDrag, DropTargetMonitor } from "react-dnd";
import {
  CONSTRUCTOR_REORDER,
  CONSTRUCTOR_DELETE,
} from "../../services/constants/index";
import {
  DragIcon,
  ConstructorElement,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { IConstructorProps, TIngredientType } from '../../services/types/index'

export const BurgerConstructorElement = ({ ingredient, index }: IConstructorProps) => {
  const dispatch = useDispatch();
  const ref = useRef<HTMLLIElement>(null);
  const [{ handlerId }, drop] = useDrop({
    accept: ["SORT_INGREDIENT"],
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      };
    },
    hover(item: { index: number, ingredient: TIngredientType } | any, monitor: DropTargetMonitor) {
      const dragIndex = item.index;
      const hoverIndex = index;
      if (dragIndex === hoverIndex) {
        return;
      }
      const hoverBoundingRect: DOMRect | undefined = ref.current?.getBoundingClientRect();
      if (hoverBoundingRect) {
        const hoverMiddleY =
          (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
        const clientOffset = monitor.getClientOffset();
        if (clientOffset) {
          const hoverClientY = clientOffset.y - hoverBoundingRect.top;
          if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
            return;
          }
          if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
            return;
          }
        }
      }
      dispatch({
        type: CONSTRUCTOR_REORDER,
        payload: {
          from: dragIndex,
          to: hoverIndex,
        },
      });
      item.index = hoverIndex;
    },
  });
  const [, drag] = useDrag({
    type: "SORT_INGREDIENT",
    item: () => {
      return { ingredient, index };
    },
  });

  drag(drop(ref));

  return (
    <li
      key={ingredient.id}
      className="m-4"
      ref={ref}
      data-handler-id={handlerId}
    >
      <DragIcon type="primary" />
      <ConstructorElement
        text={ingredient.name}
        price={ingredient.price}
        thumbnail={ingredient.image}
        handleClose={() =>
          dispatch({
            type: CONSTRUCTOR_DELETE,
            payload: index,
          })
        }
      />
    </li>
  );
};
