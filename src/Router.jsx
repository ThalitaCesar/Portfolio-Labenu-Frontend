import {Route, Routes} from "react-router-dom";
import { Hello } from './pages/Hello';
import { AboutMe } from './pages/AboutMe';
import { Projects } from './pages/Projects';
import { ContactMe } from './pages/ContactMe';

export function Router(){
    return(
        <Routes>
            <Route path="/" element={<Hello/>}/>
            <Route path="/about" element={<AboutMe/>}/>
            <Route path="/projects" element={<Projects/>}/>
            <Route path="/Contactme" element={<ContactMe/>}/>
        </Routes>
    )
}