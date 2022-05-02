import { url } from '../../utils/constants';
import { checkRes } from '../../utils/burger-api'
import { setLoading } from '../actions/loading';

export const GET_INGREDIENTS_REQUEST = 'GET_INGREDIENTS_REQUEST';
export const GET_INGREDIENTS_SUCCESS = 'GET_INGREDIENTS_SUCCESS';
export const GET_INGREDIENTS_FAILED = 'GET_INGREDIENTS_FAILED';

export const getIngredients = () =>  (dispatch) => {
  dispatch(setLoading(true))
    dispatch({
      type: GET_INGREDIENTS_REQUEST
    })
  return fetch(`${url}/ingredients`)
    .then(checkRes)
    .then( res  => {
        dispatch({
          type: GET_INGREDIENTS_SUCCESS,
          payload: res.data
        })
        dispatch(setLoading(false))
    })
    .catch( err => {
      dispatch({
          type: GET_INGREDIENTS_FAILED
      })
    })
}

