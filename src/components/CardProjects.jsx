import { CardProject, CardProjectButton, CardProjectContent, CardProjectDescription, CardProjectIcon,LinkP, CardProjectMedia, CardProjectNumber, CardProjectTitle, CardProjectFlex, CardProjectDiv, Mobile, FlexBoxDesktop } from "./styles";
import IconBox from '../assets/IconBox.png'
import React from "react";
import "swiper/css";
import "../styles.css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import Slider from "react-slick";

export function CardProjects() {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "6px",
    slidesToShow: 1,
    speed: 500,
    arrows: false,
    breakpoints:{
      "@0.00": {
        slidesToShow: 1
      },
      "@0.75": {
        slidesToShow: 1
      },
      "@1.00": {
        slidesToShow: 1
      },
      "@1.50": {
        slidesToShow: 1
      }
    }}

    return (
<>
      <Mobile>
      <Slider {...settings}>
    
          <CardProjectDiv>
            <CardProjectNumber>
            Projeto 1 
            <CardProjectTitle>
            // nome_do_projeto
            </CardProjectTitle>
            </CardProjectNumber> 
        <CardProject>
            <CardProjectMedia backgroundUrl="https://jaru.ro.gov.br/wp-content/uploads/2020/08/dataanalytics_1193397784.jpg">
                <CardProjectIcon src={IconBox} style={{height:"30px", width: "30px"}}/>
            </CardProjectMedia>
            <CardProjectContent>
                <CardProjectDescription>
                Projeto desevolvido em react com node.js, styled componentes e material ui. 
                </CardProjectDescription>
                <CardProjectButton>
                <LinkP href="https://github.com/" target="_blank">Ver Projeto</LinkP>
                </CardProjectButton>
            </CardProjectContent>
        </CardProject>
        </CardProjectDiv>
    

            <CardProjectDiv>
            <CardProjectNumber>
            Projeto 2
            <CardProjectTitle>
            //  nome_do_projeto
            </CardProjectTitle>
            </CardProjectNumber> 
        <CardProject>
            <CardProjectMedia backgroundUrl="https://jaru.ro.gov.br/wp-content/uploads/2020/08/dataanalytics_1193397784.jpg">
                <CardProjectIcon src={IconBox} style={{height:"30px", width: "30px"}}/>
            </CardProjectMedia>
            <CardProjectContent>
                <CardProjectDescription>
                Projeto desevolvido em react com node.js, styled componentes e material ui. 
                </CardProjectDescription>
                <CardProjectButton>
                <LinkP href="https://github.com/" target="_blank">Ver Projeto</LinkP>
                </CardProjectButton>
            </CardProjectContent>
        </CardProject>
        </CardProjectDiv>


            <CardProjectDiv>
            <CardProjectNumber>
            Projeto 3
            <CardProjectTitle>
            // nome_do_projeto
            </CardProjectTitle>
            </CardProjectNumber> 
        <CardProject>
            <CardProjectMedia backgroundUrl="https://jaru.ro.gov.br/wp-content/uploads/2020/08/dataanalytics_1193397784.jpg">
                <CardProjectIcon src={IconBox} style={{height:"30px", width: "30px"}}/>
            </CardProjectMedia>
            <CardProjectContent>
                <CardProjectDescription>
                Projeto desevolvido em react com node.js, styled componentes e material ui. 
                </CardProjectDescription>
                <CardProjectButton>
                <LinkP href="https://github.com/" target="_blank">Ver Projeto</LinkP>
                </CardProjectButton>
            </CardProjectContent>
        </CardProject>
        </CardProjectDiv>
       
        </Slider>
        </Mobile>

        <FlexBoxDesktop>
              
              <CardProjectDiv>
            <CardProjectNumber>
            Projeto 1 
            <CardProjectTitle>
            // nome_do_projeto
            </CardProjectTitle>
            </CardProjectNumber> 
        <CardProject>
            <CardProjectMedia backgroundUrl="https://jaru.ro.gov.br/wp-content/uploads/2020/08/dataanalytics_1193397784.jpg">
                <CardProjectIcon src={IconBox} style={{height:"30px", width: "30px"}}/>
            </CardProjectMedia>
            <CardProjectContent>
                <CardProjectDescription>
                Projeto desevolvido em react com node.js, styled componentes e material ui. 
                </CardProjectDescription>
                <CardProjectButton>
                <LinkP href="https://github.com/" target="_blank">Ver Projeto</LinkP>
                </CardProjectButton>
            </CardProjectContent>
        </CardProject>
        </CardProjectDiv>
    

            <CardProjectDiv>
            <CardProjectNumber>
            Projeto 2
            <CardProjectTitle>
            //  nome_do_projeto
            </CardProjectTitle>
            </CardProjectNumber> 
        <CardProject>
            <CardProjectMedia backgroundUrl="https://jaru.ro.gov.br/wp-content/uploads/2020/08/dataanalytics_1193397784.jpg">
                <CardProjectIcon src={IconBox} style={{height:"30px", width: "30px"}}/>
            </CardProjectMedia>
            <CardProjectContent>
                <CardProjectDescription>
                Projeto desevolvido em react com node.js, styled componentes e material ui. 
                </CardProjectDescription>
                <CardProjectButton>
                <LinkP href="https://github.com/" target="_blank">Ver Projeto</LinkP>
                </CardProjectButton>
            </CardProjectContent>
        </CardProject>
        </CardProjectDiv>


            <CardProjectDiv>
            <CardProjectNumber>
            Projeto 3
            <CardProjectTitle>
            // nome_do_projeto
            </CardProjectTitle>
            </CardProjectNumber> 
        <CardProject>
            <CardProjectMedia backgroundUrl="https://jaru.ro.gov.br/wp-content/uploads/2020/08/dataanalytics_1193397784.jpg">
                <CardProjectIcon src={IconBox} style={{height:"30px", width: "30px"}}/>
            </CardProjectMedia>
            <CardProjectContent>
                <CardProjectDescription>
                Projeto desevolvido em react com node.js, styled componentes e material ui. 
                </CardProjectDescription>
                <CardProjectButton>
                <LinkP href="https://github.com/" target="_blank">Ver Projeto</LinkP>
                </CardProjectButton>
            </CardProjectContent>
        </CardProject>
        </CardProjectDiv>
        </FlexBoxDesktop>
        </>
    )
}