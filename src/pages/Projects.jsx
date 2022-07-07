import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import {  Pages, ProjectsContainer } from "./styles";


export function Projects(){
    return(
            <Pages>
            <Header/>
            <ProjectsContainer>
                Projetos
            </ProjectsContainer>
           <Footer/>
           </Pages>
    )
} 
