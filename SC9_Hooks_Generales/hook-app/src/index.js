import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import { Padre } from './components/07-tarea-memo/Padre';

// import { CallbackHook } from './components/06-memos/CallbackHook';
// import { MemoHook } from './components/06-memos/MemoHook';
// import { Memorize } from './components/06-memos/Memorize';
// import { Layout } from './components/05-useLayoutEffect/Layout';
// import { FocusScreen } from './components/04-useref/FocusScreen';
// import { MultipleCustomHooks } from './components/03-examples/MultipleCustomHooks';
// import { FormWithCustomHook } from "./components/02-useEffect/FormWithCustomHook";
// import { SimpleForm } from "./components/02-useEffect/SimpleForm";
// import { HookApp } from "./HookApp";
// import { CounterApp } from "./components/01-useState/CounterApp";
// import { CounterWithCustomHook } from "./components/01-useState/CounterWithCustomHook";

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Padre />
  </React.StrictMode>
);


