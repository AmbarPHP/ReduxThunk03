
import { createStore, applyMiddleware } from 'redux'
import rootReducer from  "./reducers/rootReducers";
import thunk from 'redux-thunk'
import { compose } from 'redux'

//PARA USAR DEVTOOLS AGRAGAMOS ESTA LINEA DE CODIGO 
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//CREAMOS LA STORE
const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
);

export default store;