import { FooterContainer } from "./styles";
import { HeaderContainer, ButtonGroup1, ButtonGroup2, ButtonMenu, ButtonMenu2 } from "./styles";
import { GoMarkGithub } from 'react-icons/go';
import { BsLinkedin} from 'react-icons/bs';
import { SiGmail } from 'react-icons/si';

export function Footer() {
    return (
        <FooterContainer>
            <ButtonGroup1>
            <ButtonMenu>me-encontre:</ButtonMenu>
            <ButtonMenu href="https://www.linkedin.com/in/thalitac%C3%A9sar/" target="_blank"><BsLinkedin/></ButtonMenu>
            <ButtonMenu href="mailto:thalita.walleska@gmail.com" target="_blank"><SiGmail/></ButtonMenu>
            </ButtonGroup1>

            <ButtonGroup2>
            <ButtonMenu2 href="https://github.com/ThalitaCesar" target="_blank" >@ThalitaCesar <GoMarkGithub/></ButtonMenu2>
            </ButtonGroup2>
        </FooterContainer>
    )
}
