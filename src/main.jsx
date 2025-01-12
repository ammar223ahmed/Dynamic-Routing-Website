import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {NextUIProvider} from '@nextui-org/react'
import App from './App.jsx'
import './index.css'
// import AuthContextProvider from './Context/AuthContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <AuthContextProvider> */}
    <App />
    {/* </AuthContextProvider> */}
   
  </StrictMode>,
  // <NextUIProvider>
  //   <App />
  // </NextUIProvider>,
)
