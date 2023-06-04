/* eslint-disable prettier/prettier */
import {combineReducers} from 'redux';
import form1Reducer from '../Reducers/form1Reducer';
import form2Reducer from '../Reducers/form2Reducer';

const reducers = combineReducers({
  form1: form1Reducer,
  form2: form2Reducer,
});

export default reducers;
