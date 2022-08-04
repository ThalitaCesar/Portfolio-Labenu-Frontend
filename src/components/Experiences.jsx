
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { SideBarInfo } from "../components/SideBarInfo";
import { AboutMeContainer, Pages } from "../pages/styles";
import { ContainerInfoExperiences, TextExperiences } from './styles';



export function Experiences() {

            return(
                    <Pages>
                    <Header/>
                    <AboutMeContainer>
                    <SideBarInfo/>
                    <ContainerInfoExperiences>
                        <TextExperiences>
                        <span style={{color: "#607B96"}}>
                        <span style={{color: "#5565E8"}}>const</span> <span style={{color: "#43D9AD"}}> arrExpeciences</span>  <span style={{color: "#FFFFFF"}}>=</span>  <span style={{color: "#C98BDF"}}>[ </span> <br></br>
                        <span style={{color: "#FEA55F"}}>&#123; </span>
                         <br></br>
                         <span style={{color: "#43D9AD"}}> Empresa: </span>  <span style={{color: "#C98BDF"}}>'Hirix'</span>, <br></br>
                         <span style={{color: "#43D9AD"}}> Cargo: </span> <span style={{color: "#C98BDF"}}>'Desevolvedora Frontend' </span>, <br></br>
                         <span style={{color: "#43D9AD"}}> LinguagensEFerramentas: </span> <span style={{color: "#C98BDF"}}>'React, typescript, styled-components, material Ui, graphQl, mongodb, docker, figma, trello, etc... ' </span>,  <br></br>
                         <span style={{color: "#43D9AD"}}> Periodo: </span> <span style={{color: "#C98BDF"}}>'05/2022 • Atualmente' </span>,  <br></br>
                         <span style={{color: "#FEA55F"}}>&#125; </span>,<br></br>
                         <span style={{color: "#C98BDF"}}>]</span>; 
                         <br></br>
                         </span>
                        </TextExperiences>
                    </ContainerInfoExperiences>
                    </AboutMeContainer>
                   <Footer/>
                   </Pages>
            )
        } 
    
