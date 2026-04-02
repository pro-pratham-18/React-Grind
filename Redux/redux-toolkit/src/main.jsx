import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { Provider } from 'react-redux'
import { store } from './redux/store.js'

createRoot(document.getElementById('root')).render(

    <StrictMode>
        <Provider store={store}>          
            <App />
        </Provider>
    </StrictMode>,
    )

//app wrapped inside provider, to make the access of store available  to the app and its  components