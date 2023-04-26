import React ,{Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import i18n from './i18n';
import { I18nextProvider } from 'react-i18next';
import Loader from './components/Loader';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <Suspense fallback={<Loader/>}>
     <I18nextProvider i18n={ i18n }>
       <App />
       </I18nextProvider>
    </Suspense>
  </React.StrictMode>
);

