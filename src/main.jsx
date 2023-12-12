import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import router from './router/router.jsx';
import ColorProvider from './utility/ColorProvider.jsx';
import AnimatedCursor from "react-animated-cursor"



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ColorProvider>
      <div className='container mx-auto'>
        <AnimatedCursor
          showSystemCursor={true}
          innerSize={8}
          outerSize={30}
          outerAlpha={0.2}
          innerScale={0.2}
          outerScale={0.2}
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
            border: `2px solid white`,
            backgroundColor: '#FFFFFF22'
          }}
          innerStyle={{
            backgroundColor: 'white',
          }}

        />
        <RouterProvider router={router}></RouterProvider>
      </div>
    </ColorProvider>
  </React.StrictMode>,
)
