import { CardProject, CardProjectButton, CardProjectContent, CardProjectDescription, CardProjectIcon,LinkP, CardProjectMedia, CardProjectNumber, CardProjectTitle, CardProjectFlex, CardProjectDiv } from "./styles";
import Arte1 from '../assets/Arte1Logo.png'
import IconBox from '../assets/IconBox.png'
import cientik from '../assets/cientik.png'
export function CardProjects() {
    return (
        <CardProjectFlex>
            
        <CardProjectDiv>
            <CardProjectNumber>
            Projeto 1 
            <CardProjectTitle>
            // arte_1_premium
            </CardProjectTitle>
            </CardProjectNumber> 
        <CardProject>
            <CardProjectMedia backgroundUrl={Arte1}>
                <CardProjectIcon src={IconBox}/>
            </CardProjectMedia>
            <CardProjectContent>
                <CardProjectDescription>
                Projeto desevolvido em conjunto com a equipe de desenvolvedores da empresa hirix. 
                </CardProjectDescription>
                <CardProjectButton>
                <LinkP href="https://arte1premium.com.br/" target="_blank">Ver Projeto</LinkP>
                </CardProjectButton>
            </CardProjectContent>
        </CardProject>
        </CardProjectDiv>


        <CardProjectDiv>
            <CardProjectNumber>
            Projeto 2
            <CardProjectTitle>
            // cientik
            </CardProjectTitle>
            </CardProjectNumber> 
        <CardProject>
            <CardProjectMedia backgroundUrl={cientik}>
                <CardProjectIcon src={IconBox}/>
            </CardProjectMedia>
            <CardProjectContent>
                <CardProjectDescription>
                Projeto desevolvido em conjunto com a equipe de desenvolvedores da empresa hirix. 
                </CardProjectDescription>
                <CardProjectButton>
                <LinkP href="https://www.cientik.com/" target="_blank">Ver Projeto</LinkP>
                </CardProjectButton>
            </CardProjectContent>
        </CardProject>
        </CardProjectDiv>


        </CardProjectFlex>
    )
}