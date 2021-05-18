import { all } from "@redux-saga/core/effects";
import { combineReducers } from "redux";
import write, { writeSaga } from './write';

const rootReducer = combineReducers({
	write,
});

export function* rootSaga(){
	yield all([writeSaga()]);
}
export default rootReducer;
