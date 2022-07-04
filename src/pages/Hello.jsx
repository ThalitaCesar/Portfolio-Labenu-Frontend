import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import {SnackGame} from '../components/SnackGame'
import { HelloContainer, HomeInfo, ContainerGame, Pages, Snake, Span, Span1, Span2, Span3, Text1, Text2, Text3, Text4 } from "./styles";


export function Hello(){
    return(
            <Pages>
            <Header/>
            <HelloContainer>
                <HomeInfo>
                <Text1>Hi all. I am <br></br>
                <Text2>Thalita César</Text2><br></br>
                <Text3> > Front-end Developer</Text3> 
                </Text1>

                <Text4>
                <Span>// conclua o game para continuar</Span> <br></br>
                <Span>// você pode ver isso na minha página do Github</Span> <br></br>
                <Span1>const</Span1> <Span2>githubLink</Span2>= <Span3 href="https://github.com/" target="_blank">“https://github.com/repositorio”</Span3>
                </Text4>
                </HomeInfo>
                <Snake>
                    <ContainerGame>
                        <SnackGame/>
                        Hello
                    </ContainerGame>
                </Snake>
            </HelloContainer>
           <Footer/>
           </Pages>
    )
} 
