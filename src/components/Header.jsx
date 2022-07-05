import { useNavigate } from "react-router-dom";
import { HeaderContainer, ButtonMenu, ButtonMenu2, Ul, Li, ButtonMenuLogo, Hamburguer } from "./styles";
import { useEffect, useState } from "react";

export function Header() {

  const [open, setOpen] = useState(false)

   useEffect(()=>{

   })  
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
        
            <ButtonMenuLogo>thalita-cesar</ButtonMenuLogo>
            <Hamburguer open={open} onClick={() => setOpen(!open)}>
              {/* <img src={Vector}/>   */}
              <div />
              <div />
              <div />   
              </Hamburguer>
            <Ul open={open}>       
            <Li><ButtonMenu onClick={goToHello}>_ola</ButtonMenu></Li>
            <Li><ButtonMenu onClick={goToAboutMe}>_sobre-mim</ButtonMenu></Li>
            <Li><ButtonMenu onClick={goToProjects}>_projetos</ButtonMenu></Li> 
            <Li><ButtonMenu2 onClick={goToContact}>_contato</ButtonMenu2></Li>
            </Ul>
        </HeaderContainer>
    )
}
