import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { routes } from './routes';
import AppWrapper from '@/components/AppWrapper';
import 'leaflet/dist/leaflet.css';
import 'jsvectormap/dist/css/jsvectormap.min.css';
import 'datatables.net-buttons-bs5/css/buttons.bootstrap5.min.css';
import 'datatables.net-responsive-bs5/css/responsive.bootstrap5.min.css';
import 'datatables.net-select-bs5/css/select.bootstrap5.min.css';
import 'react-quill-new/dist/quill.core.css';
import 'react-quill-new/dist/quill.snow.css';
import 'react-quill-new/dist/quill.bubble.css';
import 'flatpickr/dist/flatpickr.min.css';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import '@/assets/scss/app.scss';
import { Toaster } from 'react-hot-toast';

const router = createBrowserRouter(routes);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Toaster position="top-right" />
    <AppWrapper>
      <RouterProvider router={router} />
    </AppWrapper>
  </StrictMode>
);
