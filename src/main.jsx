import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import MyState from './context/data/MyState.jsx'
import { Provider } from 'react-redux'
import { store, persistor } from './redux/store/store'
import 'react-toastify/dist/ReactToastify.css';
import { PersistGate } from 'redux-persist/integration/react'
import { app } from './FireBase/FireBase.config.js'


ReactDOM.createRoot(document.getElementById('root')).render(

  <Provider store={store} app={app}>
    <PersistGate loading={"loading"} persistor={persistor}>
      <MyState>
        <App />
      </MyState>
    </PersistGate>

  </Provider>

)
