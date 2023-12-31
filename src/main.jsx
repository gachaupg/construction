import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from "react-router-dom"
import store from './redux/store.js'
import { Provider } from 'react-redux'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
    <App />

    </Provider>

    </BrowserRouter>
  </React.StrictMode>,
)


// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'
// import store from './redux/store.js'
// import { Provider } from 'react-redux'


// // import { PersistGate } from "redux-persist/integration/react";
// // import persistStore from "redux-persist/es/persistStore";

// ReactDOM.createRoot(document.getElementById('root')).render(

//   <>
//   {/* <PersistGate loading={<div>Loading...</div>}> */}
//   <Provider store={store}>
//   <App />
//   </Provider>
      
//   {/* </PersistGate> */}
// </>
// ,
// )


