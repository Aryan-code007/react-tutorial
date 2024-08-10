import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import MyComponent from './MyComponent';

const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <MyComponent />
  </StrictMode>,
);