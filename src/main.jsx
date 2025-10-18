import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { router } from './routes/router.jsx';
import { RouterProvider } from 'react-router';
import AuthProvider from './context/AuthProvider.jsx';
import { Toaster } from 'sonner';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Create QueryClient
const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* QueryClientProvider must wrap AuthProvider */}
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={router} />
        <Toaster position="top-center"/>
      </AuthProvider>
    </QueryClientProvider>
  </StrictMode>
);
