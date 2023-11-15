import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { QueryClient,QueryClientProvider } from 'react-query'
import {RecoilRoot} from "recoil"

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <RecoilRoot> 
    <QueryClientProvider client={queryClient}>
      <App />
      </QueryClientProvider>
      </RecoilRoot> 
    </BrowserRouter>
  </React.StrictMode>,
)
