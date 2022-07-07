import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import code1 from '../assets/code1.png';
import code2 from '../assets/code2.png';
import code3 from '../assets/code3.png';
import { HelloContainer, HomeInfo, ContainerGame, Pages, Snake, Span, Span1, Span2, Span3, Text1, Text2, Text3, Text4 } from "./styles";


export function Hello(){
    return(
            <Pages>
            <Header/>
            <HelloContainer>
                <HomeInfo>
                <Text1>Olá galera, eu sou <br></br>
                <Text2>Thalita César</Text2><br></br>
                <Text3> > Desenvolvedora Front-end</Text3> 
                </Text1>

                <Text4>
                <Span>// navegue pelo menu para me conhecer melhor</Span> <br></br>
                <Span>// você pode ver o código desse projeto no Github</Span> <br></br>
                <Span1>const</Span1> <Span2>githubLink</Span2>= <Span3 href="https://github.com/ThalitaCesar/portfolio-labenu" target="_blank">“https://github.com/repositorio”</Span3>
                </Text4>
                </HomeInfo>
                <Snake>
                    <ContainerGame>
                        <img src={code1} style={{width: "500px"}}/>
                        <img src={code2} style={{width: "500px", marginTop: "10px", marginBottom: "10px"}}/>
                        <img src={code3} style={{width: "500px"}}/>
                    </ContainerGame>
                </Snake>
            </HelloContainer>
           <Footer/>
           </Pages>
    )
} 
