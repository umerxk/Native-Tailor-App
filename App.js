import * as React from "react";
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from "./redux/store";
import Routes from "./components/Routes";
export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
       <Routes/>
      </PersistGate>
    </Provider>
  );
}
