
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { SideBarInfo } from "../components/SideBarInfo";
import { AboutMeContainer, Pages } from "../pages/styles";
import { ContainerInfoExperiences } from './styles';



export function Experiences() {

            return(
                    <Pages>
                    <Header/>
                    <AboutMeContainer>
                    <SideBarInfo/>
                    <ContainerInfoExperiences>
                    </ContainerInfoExperiences>
                    </AboutMeContainer>
                   <Footer/>
                   </Pages>
            )
        } 
    
