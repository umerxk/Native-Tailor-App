import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import authReducer from './authReducer';
import flowReducer from './flowReducer';
import AsyncStorage from '@react-native-async-storage/async-storage';

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  whitelist: ["auth"],
  blacklist : ['flow']
};

const rootReducer = combineReducers({
  auth: authReducer,
  flow : flowReducer,
});

export default persistReducer(persistConfig, rootReducer);
