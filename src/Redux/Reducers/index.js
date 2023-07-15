/* eslint-disable prettier/prettier */
import {combineReducers} from 'redux';
import form1Reducer from '../Reducers/form1Reducer';
import form2Reducer from '../Reducers/form2Reducer';
import form3Reducer from '../Reducers/form3Reducer';
import form4Reducer from '../Reducers/form4Reducer';
import loginReducer from '../Reducers/loginReducer';

const reducers = combineReducers({
  form1: form1Reducer,
  form2: form2Reducer,
  form3: form3Reducer,
  form4: form4Reducer,
  login: loginReducer,
});

export default reducers;
