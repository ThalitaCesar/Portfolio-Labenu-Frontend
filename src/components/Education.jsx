
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { SideBarInfo } from "../components/SideBarInfo";
import { AboutMeContainer, Pages } from "../pages/styles";
import { CardEducation } from "./CardEducation";
import { ContainerInfoEducation } from './styles';



export function Education() {

            return(
                    <Pages>
                    <Header/>
                    <AboutMeContainer>
                    <SideBarInfo/>
                    <ContainerInfoEducation>
                    <CardEducation/>
                    </ContainerInfoEducation>
                    </AboutMeContainer>
                   <Footer/>
                   </Pages>
            )
        } 
    
