import { BrowserRouter } from "react-router-dom"
import { Router } from "./Router"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function App() {
  return ( 
      <BrowserRouter>
      <Router />
      </BrowserRouter>
  )
}

export default App
