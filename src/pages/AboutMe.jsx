
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { SideBarInfo } from "../components/SideBarInfo";
import { AboutMeContainer, ContainerInfoAbout, Pages, TitleInfo, FlexAbout} from "./styles";



export function AboutMe(){

    
    return(
            <Pages>
            <Header/>
            <AboutMeContainer>
            <SideBarInfo/>
            <ContainerInfoAbout>
           
            <TitleInfo>Seja Bem Vindo! 🤘</TitleInfo> 
            <p>
                Puxe a cadeira, pegue uma xícara de café e fique a vontade para navegar no menu lateral(Desktop) ou em cima (Mobile).
            </p>
        
            </ContainerInfoAbout>
            </AboutMeContainer>
           <Footer/>
           </Pages>
    )
} 