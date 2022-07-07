import { SiFiles } from 'react-icons/si';
import { AsideSideInfoContainer, ListaAboutMe, MenuAboutMe, MenuIcons } from './styles';
import icon1 from '../assets/icon1.png'
import icon2 from '../assets/icon2.png'
import icon3 from '../assets/icon3.png'
import { useNavigate } from "react-router-dom";

export function SideBarInfo() {

    const navigate = useNavigate();

    const goToBio = () => {
        navigate('/about/bio')
      };
    const goToExperiences = () => {
        navigate('/about/experiences')
    };
    const goToEducation = () => {
        navigate('/about/education')
    };
    const goToHobbies = () => {
        navigate('/about/hobbies')
    };

    return (
        <AsideSideInfoContainer>
            <MenuIcons>
                <img src={icon1} style={{paddingBottom:"10px", paddingRight:"10px"}}/>
                <img src={icon2} style={{paddingBottom:"10px", paddingRight:"10px"}}/>
                <img src={icon3} style={{paddingBottom:"10px"}}/>
            </MenuIcons>
        <MenuAboutMe>
            <ListaAboutMe onClick={goToBio} >
                <strong> > </strong> 
            <SiFiles style={{color: '#E99287'}}/>
            <span> bio</span> 
             </ListaAboutMe>
            <ListaAboutMe onClick={goToEducation}>
                <strong> > </strong> 
            <SiFiles style={{color: '#43D9AD'}}/>
            <span> cursos e bootcamps </span> 
             </ListaAboutMe>
            <ListaAboutMe onClick={goToExperiences}>
                <strong> > </strong> 
            <SiFiles  style={{color: '#3A49A4'}}/> 
            <span> experiências</span> 
            </ListaAboutMe>
            <ListaAboutMe onClick={goToHobbies}>
                <strong> > </strong> 
            <SiFiles  style={{color: '#FEA55F'}}/> 
           <span> hobbies e +</span> 
            </ListaAboutMe>
        </MenuAboutMe>
        </AsideSideInfoContainer>
    )
}

// hobbies :
// desenhar, escrever poemas e poesias, apreciar natureza e a beleza urbana, 
// jogos dos anos 80-90, cozinhar bolos e doces, espiritualidade, 
// agricultura natural, dança do ventre. 
// curiosidades: eu já fiz aula de canto, tenho uma gata de 6 aninhos chamada margarida,
// já fui mística, tenho muito curiosidade e gosto de estar sempre aprendendo algo novo. 