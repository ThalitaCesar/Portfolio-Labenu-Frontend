import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { SideBarInfo } from "../components/SideBarInfo";
import { AboutMeContainer, Pages } from "../pages/styles";
import { textVariant2 } from "../utils/motion";
import { ContainerInfoExperiences, TextExperiences } from './styles';
import {motion} from 'framer-motion';

export function Experiences() {

    return (
        <Pages>
            <Header />
            <AboutMeContainer>
                <SideBarInfo />
                <ContainerInfoExperiences>
                <motion.div variants={textVariant2} initial="hidden" whileInView="show">
                    <TextExperiences>
                        <span style={{ color: "#607B96" }}>
                            <span style={{ color: "#5565E8" }}>const</span> <span style={{ color: "#43D9AD" }}>arrExperiences</span>  <span style={{ color: "#FFFFFF" }}>=</span>  <span style={{ color: "#C98BDF" }}>[</span> <br></br>
                            <span style={{ color: "#FEA55F" }}>&#123; </span>
                            <br></br>
                            <span style={{ color: "#43D9AD" }}>Company: </span>  <span style={{ color: "#C98BDF" }}>'Hirix'</span>, <br></br>
                            <span style={{ color: "#43D9AD" }}>Position: </span> <span style={{ color: "#C98BDF" }}>'Frontend Developer'</span>, <br></br>
                            <span style={{ color: "#43D9AD" }}>LanguagesAndTools: </span> <span style={{ color: "#C98BDF" }}>'React, TypeScript, Styled Components, Material UI, GraphQL, MongoDB, Docker, Figma, Trello, etc...'</span>,  <br></br>
                            <span style={{ color: "#43D9AD" }}>Period: </span> <span style={{ color: "#C98BDF" }}>'05/2022 • 05/2023'</span>,  <br></br>
                            <span style={{ color: "#FEA55F" }}>&#125; </span>,<br></br>
                            <span style={{ color: "#FEA55F" }}>&#123; </span>
                            <br></br>
                            <span style={{ color: "#43D9AD" }}>Company: </span>  <span style={{ color: "#C98BDF" }}>'Datavence'</span>, <br></br>
                            <span style={{ color: "#43D9AD" }}>Position: </span> <span style={{ color: "#C98BDF" }}>'Frontend Developer'</span>, <br></br>
                            <span style={{ color: "#43D9AD" }}>LanguagesAndTools: </span> <span style={{ color: "#C98BDF" }}>'React, TypeScript, Tailwind CSS, Material UI, Jira, Node.js, Nest.js, PHP, etc...'</span>,  <br></br>
                            <span style={{ color: "#43D9AD" }}>Period: </span> <span style={{ color: "#C98BDF" }}>'05/2023 • Present'</span>,  <br></br>
                            <span style={{ color: "#FEA55F" }}>&#125; </span>,<br></br>
                            <span style={{ color: "#C98BDF" }}>] </span>;
                         
                         <br></br>
                    </span>
                </TextExperiences>
                </motion.div>
            </ContainerInfoExperiences>
            </AboutMeContainer>
            <Footer />
        </Pages>
    )
}
