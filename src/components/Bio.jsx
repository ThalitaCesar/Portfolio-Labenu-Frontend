import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { SideBarInfo } from "../components/SideBarInfo";
import { AboutMeContainer, Pages, ContainerInfo } from "../pages/styles";
import { NumberOfLines, TextBox, LinesContainer, SpanCode, ResponsiveText, BioContainer, ImageContainer, Image, MenuImage } from './styles';
import photo from '../assets/photo.jpeg'
import { slideIn, textVariant2 } from "../utils/motion";
import {motion} from 'framer-motion';
export function Bio() {
       
    return (
        <Pages>
            <Header />
            <AboutMeContainer>
                <SideBarInfo />
                <ContainerInfo>
                    <motion.div variants={slideIn("right", "spring", 0, 1.8)}
                                initial="hidden"
                                animate="show">
                    <BioContainer>
                        <MenuImage>
                            <p>X</p>
                        </MenuImage>
                <ImageContainer>
                    <Image src={photo} alt="Profile" />
                    </ImageContainer>
                    </BioContainer>
                    </motion.div>
                    <LinesContainer>
                        <NumberOfLines>1</NumberOfLines>
                        <NumberOfLines>2</NumberOfLines>
                        <NumberOfLines>3</NumberOfLines>
                        <NumberOfLines>4</NumberOfLines>
                        <NumberOfLines>5</NumberOfLines>
                        <NumberOfLines>6</NumberOfLines>
                        <NumberOfLines>7</NumberOfLines>
                        <NumberOfLines>8</NumberOfLines>
                        <NumberOfLines>9</NumberOfLines>
                        <NumberOfLines>10</NumberOfLines>
                        <NumberOfLines>11</NumberOfLines>
                        <NumberOfLines>12</NumberOfLines>
                        <NumberOfLines>13</NumberOfLines>
                        <NumberOfLines>14</NumberOfLines>
                        <NumberOfLines>15</NumberOfLines>
                        <NumberOfLines>16</NumberOfLines>
                        <NumberOfLines>17</NumberOfLines>
                        <NumberOfLines>18</NumberOfLines>
                        <NumberOfLines>19</NumberOfLines>
                        <NumberOfLines>20</NumberOfLines>
                    </LinesContainer>
                    <motion.div variants={textVariant2} initial="hidden" whileInView="show">
                    <TextBox>
                        <ResponsiveText>
                            // about-me / bio
                        </ResponsiveText>
                        <SpanCode>/** </SpanCode> <br></br>
                        <SpanCode>* </SpanCode> Nice to meet you, I'm Thalita. <br></br>
                        <SpanCode>* </SpanCode> <br></br>
                        <SpanCode>* </SpanCode> I have been studying programming since 2020. <SpanCode><br></br> </SpanCode>
                        <SpanCode>* </SpanCode> I am a React frontend software developer. <SpanCode><br></br> </SpanCode>
                        <SpanCode>* </SpanCode>  Self-taught. <SpanCode><br></br> </SpanCode>
                        <SpanCode>* </SpanCode> Passionate about learning new things, <SpanCode><br></br> </SpanCode>
                        <SpanCode>* </SpanCode>  I enjoy challenges and finding solutions <SpanCode><br></br> </SpanCode>
                        <SpanCode>* </SpanCode> to detected problems. <SpanCode><br></br> </SpanCode>
                        <SpanCode>* </SpanCode> <br></br>
                        <SpanCode>* </SpanCode> I develop modern and responsive applications <SpanCode><br></br> </SpanCode>
                        <SpanCode>* </SpanCode> with Next.js, typescript, material ui <SpanCode><br></br> </SpanCode>
                        <SpanCode>* </SpanCode> and integrated with APIs REST and GraphQL. <SpanCode><br></br> </SpanCode>
                        <SpanCode>* </SpanCode> I use agile methodologies and clean code <SpanCode><br></br> </SpanCode>
                        <SpanCode>* </SpanCode>prioritizing user experience and usability (UI/UX). <SpanCode><br></br> </SpanCode>
                        <SpanCode>* </SpanCode> <br></br>
                        <SpanCode>* </SpanCode> I'm passionate about CSS.<SpanCode><br></br> </SpanCode>
                        <SpanCode>* </SpanCode> However, I am open to learning new technologies.<SpanCode><br></br> </SpanCode>
                        <SpanCode>* </SpanCode> <br></br>
                        <SpanCode>*/ </SpanCode>
                    </TextBox>
                    </motion.div>
                </ContainerInfo>
            </AboutMeContainer>
            <Footer />
        </Pages>
    )
}
