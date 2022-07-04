import { useNavigate } from "react-router-dom";
import { Menu } from "./Menu";
import { HeaderContainer, ButtonGroup1, ButtonGroup2, ButtonMenu, ButtonMenu2 } from "./styles";


export function Header() {

     
    const navigate = useNavigate();

    const goToHello = () => {
      navigate('/')
    };

    const goToAboutMe = () => {
        navigate('/about')
      };

      const goToProjects = () => {
        navigate('/projects')
      };

      const goToContact = () => {
        navigate('/contactme')
      };

    return (
        <HeaderContainer>
            <ButtonGroup1>
            <ButtonMenu>thalita-cesar</ButtonMenu>
            <ButtonMenu onClick={goToHello}>_hello</ButtonMenu>
            <ButtonMenu onClick={goToAboutMe}>_sobre-mim</ButtonMenu>
            <ButtonMenu onClick={goToProjects}>_projetos</ButtonMenu>
            </ButtonGroup1>

            <ButtonGroup2>
            <ButtonMenu2 onClick={goToContact}>_contato</ButtonMenu2>
            </ButtonGroup2>
        </HeaderContainer>
    )
}
