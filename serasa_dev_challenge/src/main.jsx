import React from 'react';
import ReactDOM from 'react-dom/client';
import { Avaliation } from './pages/Avaliation';
import { Home } from './pages/Home';

import { ChakraProvider } from '@chakra-ui/react';
import { theme } from "./theme";

import { RouterProvider, createBrowserRouter as RouterCreator } from 'react-router-dom';

const router = RouterCreator([
  {
    path: "/help/avaliation",
    element: <Avaliation/>
  },
  {
    path: "/",
    element: <Home/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider theme={theme}>
    <RouterProvider router={router}>
    </RouterProvider>
    </ChakraProvider>
);
