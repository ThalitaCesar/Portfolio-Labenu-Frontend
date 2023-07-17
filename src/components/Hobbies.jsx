import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { SideBarInfo } from "../components/SideBarInfo";
import { AboutMeContainer, ContainerInfoH, Pages } from "../pages/styles";
import { slideIn, textVariant2 } from "../utils/motion";
import { ContainerInfoHobbies, HobbiesTextContainer, ContainerCode, LinesContainer, Scrol, NumberOfLines, ResponsiveText, ScrollBarVsCode, SpanCode, TextBox, TextExperiences } from './styles';
import {motion} from 'framer-motion';

export function Hobbies() {

    return (
        <Pages>
            <Header />
            <AboutMeContainer>
                <SideBarInfo />
                <ContainerInfoHobbies>
                <motion.div variants={textVariant2} initial="hidden" whileInView="show">
                    <HobbiesTextContainer>
                        <ContainerInfoH>
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
                            </LinesContainer>
                            <TextBox>
                                <ResponsiveText>
                                    // About Me / Hobbies and More
                                </ResponsiveText>
                                <SpanCode>/** </SpanCode> <br></br>
                                <SpanCode>* </SpanCode> Thalita before programming <br></br>
                                <SpanCode>* </SpanCode> <br></br>
                                <SpanCode>* </SpanCode> I graduated in marketing in 2013<SpanCode><br></br> </SpanCode>
                                <SpanCode>* </SpanCode> and with the aim of helping<SpanCode><br></br> </SpanCode>
                                <SpanCode>* </SpanCode> people, I started the social<SpanCode><br></br> </SpanCode>
                                <SpanCode>* </SpanCode> service course. At the same time,<SpanCode><br></br> </SpanCode>
                                <SpanCode>* </SpanCode> I worked in administrative tasks.<SpanCode><br></br> </SpanCode>
                                <SpanCode>* </SpanCode> <br></br>
                                <SpanCode>* </SpanCode> Being dissatisfied and without<SpanCode><br></br> </SpanCode>
                                <SpanCode>* </SpanCode> growth prospects, while already<SpanCode><br></br> </SpanCode>
                                <SpanCode>* </SpanCode> finding a volunteer job where<SpanCode><br></br> </SpanCode>
                                <SpanCode>* </SpanCode> I could help people, at 27 years<SpanCode><br></br> </SpanCode>
                                <SpanCode>* </SpanCode> old, I decided to start my career<SpanCode><br></br> </SpanCode>
                                <SpanCode>* </SpanCode> transition to the technology field.<SpanCode><br></br> </SpanCode>
                                <SpanCode>*/ </SpanCode>
                            </TextBox>

                        </ContainerInfoH>
                        <ScrollBarVsCode>
                            <Scrol></Scrol>
                        </ScrollBarVsCode>
                    </HobbiesTextContainer>
                    </motion.div>
                    <motion.div variants={textVariant2} initial="hidden" whileInView="show">
                    <TextExperiences>
                        <ContainerCode>
                            <span style={{ color: "#607B96" }}>
                                <span style={{ color: "#E99287" }}>let</span> <span style={{ color: "#43D9AD" }}>hobbies</span>  <span style={{ color: "#FFFFFF" }}>=</span>  <span style={{ color: "#C98BDF" }}>[</span> <br></br>
                                <br></br>
                                <p>// List of what I do in my spare time</p>
                                <span style={{ color: "#FEA55F" }}>'drawing'</span>, <br></br>
                                <span style={{ color: "#FEA55F" }}>'writing poetry and poems'</span>, <br></br>
                                <span style={{ color: "#FEA55F" }}>'photography'</span>, <br></br>
                                <span style={{ color: "#FEA55F" }}>'reading'</span>, <br></br>
                                <span style={{ color: "#FEA55F" }}>'traveling'</span>,  <br></br>
                                <span style={{ color: "#FEA55F" }}>'appreciating the beauty of nature and urban areas'</span>,  <br></br>
                                <span style={{ color: "#FEA55F" }}>'playing games from the 80s and 90s'</span>,  <br></br>
                                <span style={{ color: "#FEA55F" }}>'natural farming'</span>,  <br></br>
                                <span style={{ color: "#FEA55F" }}>'baking cakes and desserts'</span>,  <br></br>
                                <span style={{ color: "#C98BDF" }}>]</span>; <br></br>
                                <br></br>
                                <span style={{ color: "#43D9AD" }}>console.</span>
                                <span style={{ color: "#5565E8" }}>log </span>
                                (<span style={{ color: "#43D9AD" }}>hobbies.length</span>) <br></br>
                            </span>
                        </ContainerCode>
                    </TextExperiences>
                    </motion.div>

                </ContainerInfoHobbies>
            </AboutMeContainer>
            <Footer />
        </Pages>
    )
}
