
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { SideBarInfo } from "../components/SideBarInfo";
import { AboutMeContainer, Pages } from "../pages/styles";
import { ContainerInfoHobbies } from './styles';



export function Hobbies() {

            return(
                    <Pages>
                    <Header/>
                    <AboutMeContainer>
                    <SideBarInfo/>
                    <ContainerInfoHobbies>
                    </ContainerInfoHobbies>
                    </AboutMeContainer>
                   <Footer/>
                   </Pages>
            )
        } 
    
