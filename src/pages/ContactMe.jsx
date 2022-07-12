import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import code1 from '../assets/code1.png';
import code2 from '../assets/code2.png';
import code3 from '../assets/code3.png';
import { HelloContainer, HomeInfo, ContainerGame, Pages, Snake, Span, Span1, Span2, Span3, Text1, Text2, Text3, Text4 } from "./styles";
import { FormContact } from "../components/FormContact";
import { Scrol, ScrollBarVsCode } from "../components/styles";



export function ContactMe(){
    return(
            <Pages>
            <Header/>
            <HelloContainer>
                <HomeInfo style={{borderLeft:"1px solid #1E2D3D"}}>
                <FormContact/>
                </HomeInfo>

                <Snake>
                   
                </Snake>
            </HelloContainer>
           <Footer/>
           </Pages>
    )
} 
