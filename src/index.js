import React ,{Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './i18n';
import Loader from './components/Loader';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <Suspense fallback={<Loader/>}>
       <App />
    </Suspense>
  </React.StrictMode>
);

