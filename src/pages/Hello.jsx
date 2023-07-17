import {Footer} from "../components/Footer";
import {Header} from "../components/Header";
import code1 from '../assets/code1.png';
import code2 from '../assets/code2.png';
import code3 from '../assets/code3.png';
import {motion} from 'framer-motion';
import {
    HelloContainer,
    HomeInfo,
    ContainerGame,
    Pages,
    Snake,
    Span,
    Span1,
    Span2,
    Span3,
    Text1,
    Text2,
    Text3,
    Text4
} from "./styles";
import {slideIn, staggerContainer, textContainer, textVariant, textVariant2} from "../utils/motion";

export function Hello() {
    return (

        <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{
            once: false,
            amount: 0.25
        }}>
            <Pages>
                <Header/>
                <HelloContainer>
                    <HomeInfo>
                        <Text1 >
                            <motion.h2 variants={textVariant2} initial="hidden" whileInView="show">
                                Hello everyone, I'm</motion.h2>
                            <br></br>
                            <motion.h1 variants={textVariant2} initial="hidden" whileInView="show">
                            <Text2>Thalita Cesar</Text2>
                                </motion.h1>  
                            <br></br>
                            <motion.h1 variants={textVariant2} initial="hidden" whileInView="show">
                            <Text3>
                                Frontend Developer
                                </Text3>
                                </motion.h1>  
                        </Text1>
                        <motion.h2 variants={textVariant2} initial="hidden" whileInView="show">
                        <Text4 >
                            <Span>// navigate through the menu to know me better</Span>
                            <br></br>
                            <Span>// you can view the code for this project on Github</Span>
                            <br></br>
                            <Span1>const </Span1>
                            <Span2>githubLink </Span2>=
                            <Span3 href="https://github.com/ThalitaCesar/portfolio-labenu" target="_blank">  “https://github.com/repository”
                            </Span3>
                        </Text4>
                        </motion.h2>
                    </HomeInfo>
                    <Snake>
                        <ContainerGame>
                            <motion.img
                                src={code1}
                                style={{
                                width: "400px"
                            }}
                                variants={slideIn("right", "spring", 0, 1.8)}
                                initial="hidden"
                                animate="show"/>
                            <motion.img
                                src={code2}
                                style={{
                                width: "400px",
                                marginTop: "10px",
                                marginBottom: "10px"
                            }}
                                variants={slideIn("left", "spring", 0.2, 1.8)}
                                initial="hidden"
                                animate="show"/>
                            <motion.img
                                src={code3}
                                style={{
                                width: "400px"
                            }}
                                variants={slideIn("right", "spring", 0.4, 1.8)}
                                initial="hidden"
                                animate="show"/>
                        </ContainerGame>
                    </Snake>
                </HelloContainer>
                <Footer/>
            </Pages>
        </motion.div>
    )
}
