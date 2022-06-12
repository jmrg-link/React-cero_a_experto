import React from 'react';
import ReactDOM from 'react-dom/client';
import { SimpleForm } from "./components/02-useEffect/SimpleForm";
// import { HookApp } from "./HookApp";
// import { CounterApp } from "./components/01-useState/CounterApp";
// import { CounterWithCustomHook } from "./components/01-useState/CounterWithCustomHook";

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <SimpleForm />
  </React.StrictMode>
);


