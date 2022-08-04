import {Route, Routes} from "react-router-dom";
import { Hello } from './pages/Hello';
import { AboutMe } from './pages/AboutMe';
import { Projects } from './pages/Projects';
import { ContactMe } from './pages/ContactMe';
import { Bio } from "./components/Bio";
import { Experiences } from "./components/Experiences";
import { Education } from "./components/Education";
import { Hobbies } from "./components/Hobbies";
import { PageConfirmation } from "./components/PageConfirmation";

export function Router(){
    return(
        <Routes>
            <Route path="/" element={<Hello/>}/>
            <Route path="/about" element={<AboutMe/>}/>
            <Route path="/about/bio" element={<Bio/>}/>
            <Route path="/about/experiences" element={<Experiences/>}/>
            <Route path="/about/education" element={<Education/>}/>
            <Route path="/about/hobbies" element={<Hobbies/>}/>
            <Route path="/projects" element={<Projects/>}/>
            <Route path="/Contactme" element={<ContactMe/>}/>
            <Route path="/contactme/confirmation" element={<PageConfirmation/>}/>
        </Routes>
    )
}