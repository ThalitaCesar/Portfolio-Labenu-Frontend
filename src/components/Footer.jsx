import { FooterContainer, Link1, Link2 } from "./styles";
import { HeaderContainer, ButtonGroup1, ButtonGroup2, ButtonMenuFooter, ButtonMenu2 } from "./styles";
import { GoMarkGithub } from 'react-icons/go';
import { BsLinkedin} from 'react-icons/bs';
import { SiGmail } from 'react-icons/si';

export function Footer() {
    return (
        <FooterContainer>
            <ButtonGroup1>
            <ButtonMenuFooter>me-encontre:</ButtonMenuFooter>
            <Link1 href="https://www.linkedin.com/in/thalitac%C3%A9sar/" target="_blank"><BsLinkedin/></Link1>
            <Link1 href="mailto:thalita.walleska@gmail.com" target="_blank"><SiGmail/></Link1>
            </ButtonGroup1>

            <ButtonGroup2>
            <Link2 href="https://github.com/ThalitaCesar" target="_blank" > <GoMarkGithub/></Link2>
            </ButtonGroup2>
        </FooterContainer>
    )
}
