import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from "react-router-dom";
import {AuthProvider} from "./context/auth";

ReactDOM.render(
<React.StrictMode>
    <AuthProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </AuthProvider>
    

</React.StrictMode>, 
document.getElementById('root')
);
registerServiceWorker();
