// main.tsx hoặc index.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RedocStandalone } from 'redoc';
import './main.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RedocStandalone
      specUrl='/swagger.json'
      options={{
        scrollYOffset: 60,
        hideDownloadButton: true,

        theme: {
          colors: {
            primary: {
              main: '#f7a600',
              contrastText: '#ffffff', // Màu chữ chính
            },

            text: {
              primary: '#ffffff', // Màu chữ chính
              secondary: '#ffffff', // Màu chữ phụ
            },
          },
          logo: {
            // maxHeight: '70px',
            maxWidth: '200px',
            gutter: '20px', // Khoảng cách giữa logo và tiêu đề
          },
          sidebar: {
            backgroundColor: '#121212', // Màu nền sidebar
            textColor: '#ffffff', // Màu chữ sidebar
            activeTextColor: '#f7a600', // Màu chữ khi active
          },
          typography: {
            fontSize: '14px', // Kích thước chữ
            fontFamily: '"IBM Plex Sans", sans-serif', // Phông chữ
            headings: {
              fontWeight: 'bold', // Đậm tiêu đề
            },
          },

          rightPanel: {
            backgroundColor: '#71786427',
            servers: {
              url: {
                backgroundColor() {
                  return '#121212';
                },
              },
            },
          },
        },
      }}
    />
  </React.StrictMode>
);
