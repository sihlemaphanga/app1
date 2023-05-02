import React from 'react'
import ReactDOM from 'react-dom/client'
import {MaphangaComponent} from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MaphangaComponent title={"My app"} describtion={"Here for you"}/>
  </React.StrictMode>,
)
