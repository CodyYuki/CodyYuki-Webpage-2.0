import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'
import WelcomeBox from './HomePage/WelcomeBox'
import './HomePage/WelcomeBox.css'
// import Portrait from './Homepage/Portrait'
import './HomePage/Portrait.css'
import Backgroundimg from './Homepage/Backgroundimg'
import Art from './Homepage/Art'
import SoftwareProject from './Homepage/SoftwareProjects'
import Sites from './Homepage/sites'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <WelcomeBox />
    {/* <Portrait /> */}
    <Backgroundimg />
    <Art />
    <SoftwareProject />
    <Sites />
  </React.StrictMode>,
)
