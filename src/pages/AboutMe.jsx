import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { SideBarInfo } from "../components/SideBarInfo";
import { textContainer, textVariant2 } from "../utils/motion";
import { motion } from 'framer-motion';
import { AboutMeContainer, ContainerInfoAbout, Pages, TitleInfo, FlexAbout } from "./styles";

export function AboutMe() {

  return (
    <Pages>
      <Header />
      <AboutMeContainer>
        <SideBarInfo />
        <ContainerInfoAbout>
          <motion.div variants={textVariant2} initial="hidden" whileInView="show">
            <TitleInfo>Welcome! 🤘</TitleInfo>
            <p>
              Pull up a chair, grab a cup of coffee, and feel free to navigate through the sidebar menu (Desktop) or at the top (Mobile).
            </p>
          </motion.div>
        </ContainerInfoAbout>
      </AboutMeContainer>
      <Footer />
    </Pages>
  )
}
