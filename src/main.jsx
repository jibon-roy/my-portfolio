import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import router from './router/router.jsx';
import AnimatedCursor from "react-animated-cursor"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className="App">
      <AnimatedCursor
        innerSize={8}
        outerSize={20}
        outerAlpha={0.2}
        innerScale={0.5}
        outerScale={3}
        clickables={[
          'a',
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          'label[for]',
          'select',
          'textarea',
          'button',
          '.link'
        ]}
        outerStyle={{
          border: '2px solid green',
          backgroundColor: '#00ff00aa'
        }}
        innerStyle={{
          backgroundColor: 'blue',
        }}
      />
      <RouterProvider router={router}></RouterProvider>
    </div>
  </React.StrictMode>,
)
