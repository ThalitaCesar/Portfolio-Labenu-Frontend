
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { SideBarInfo } from "../components/SideBarInfo";
import { AboutMeContainer, Pages, ContainerInfo } from "./styles";



export function AboutMe(){

    
    return(
            <Pages>
            <Header/>
            <AboutMeContainer>
            <SideBarInfo/>
            </AboutMeContainer>
           <Footer/>
           </Pages>
    )
} 