import React from 'react';
import ReactDOM from 'react-dom/client';
import { ApiReferenceReact } from '@scalar/api-reference-react';
import '@scalar/api-reference-react/style.css';
import './main.css';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://wikaex.com';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ApiReferenceReact
      configuration={{
        url: '/swagger.yaml',
        darkMode: true,
        theme: 'deepSpace',
        withDefaultFonts: false,
        servers: [
          {
            url: `${API_BASE_URL}/api`,
            description: 'API Server',
          },
        ],
        customCss: `
          :root {
            --scalar-font: 'IBM Plex Sans', sans-serif;
            --scalar-color-accent: #f7a600;
          }
        `,
        metaData: {
          title: 'WikaEx API Documentation',
        },
      }}
    />
  </React.StrictMode>,
);
