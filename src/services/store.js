import thunk from "redux-thunk";
import { rootReducer } from "./reducers/rootReducer";
import { compose, createStore, applyMiddleware } from "redux";
import { wsUrl } from "../utils/constants";
import { socketMiddleware } from './middlewares/socketMiddleware'
import { wsActions } from './reducers/webSockets'

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const enhancer = composeEnhancers(applyMiddleware(thunk), applyMiddleware(socketMiddleware(wsUrl, wsActions)));
export const store = createStore(rootReducer, enhancer);
