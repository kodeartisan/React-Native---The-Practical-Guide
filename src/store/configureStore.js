import { createStore, combineReducers, compose } from 'redux';

import placesReducer from './reducers/places';
import uiReducer from './reducers/ui';

const rootReducers = combineReducers({
    places: placesReducer,
    ui: uiReducer
});

let composeEnhancers = compose;

if(__DEV__) {
    composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;
}

const configureStore = () => {
    return createStore(rootReducers, composeEnhancers());
};

export default configureStore;
