import { CardProjects } from "../components/CardProjects";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import {  Pages, ProjectsContainer } from "./styles";



export function Projects(){
    return(
            <Pages>
            <Header/>
            <ProjectsContainer>
               <CardProjects/>
            </ProjectsContainer>
           <Footer/>
           </Pages>
    )
} 
