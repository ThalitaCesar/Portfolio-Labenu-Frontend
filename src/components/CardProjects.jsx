import { CardProject, CardProjectButton, CardProjectContent, CardProjectDescription, CardProjectIcon,LinkP, CardProjectMedia, CardProjectNumber, CardProjectTitle, CardProjectFlex, CardProjectDiv, Mobile, FlexBoxDesktop } from "./styles";
import IconBox from '../assets/IconBox.png'
import React from "react";
import "swiper/css";
import "../styles.css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import Slider from "react-slick";
import arte1 from '../assets/arte1.png'
import { slideIn } from "../utils/motion";
import {motion} from 'framer-motion';

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
            Project  1 
            <CardProjectTitle>
            // arte_1_premium
            </CardProjectTitle>
            </CardProjectNumber> 
        <CardProject>
            <CardProjectMedia backgroundUrl={arte1}>
                <CardProjectIcon src={IconBox} style={{height:"30px", width: "30px"}}/>
            </CardProjectMedia>
            <CardProjectContent>
                <CardProjectDescription>
                Streaming documentary and film project about art, developed in react together with a team of developers.
                </CardProjectDescription>
                <CardProjectButton>
                <LinkP href="https://www.arte1premium.com.br/" target="_blank">See Project</LinkP>
                </CardProjectButton>
            </CardProjectContent>
        </CardProject>
        </CardProjectDiv>
    

            <CardProjectDiv>
            <CardProjectNumber>
            Project  2
            <CardProjectTitle>
            //  zenite
            </CardProjectTitle>
            </CardProjectNumber> 
        <CardProject>
            <CardProjectMedia backgroundUrl="https://user-images.githubusercontent.com/83131771/195320891-bfc56bcd-f6ef-4bc9-9574-a23b8f0b6835.png">
                <CardProjectIcon src={IconBox} style={{height:"30px", width: "30px"}}/>
            </CardProjectMedia>
            <CardProjectContent>
                <CardProjectDescription>
                Project developed with React, Styled Components and the ViaCEP API. 
                </CardProjectDescription>
                <CardProjectButton>
                <LinkP href="https://github.com/ThalitaCesar/Zenite-API-ViaCEP" target="_blank">See Project</LinkP>
                </CardProjectButton>
            </CardProjectContent>
        </CardProject>
        </CardProjectDiv>


            <CardProjectDiv>
            <CardProjectNumber>
            Project  3
            <CardProjectTitle>
            // lama_ecommerce
            </CardProjectTitle>
            </CardProjectNumber> 
        <CardProject>
            <CardProjectMedia backgroundUrl="https://user-images.githubusercontent.com/83131771/236363409-ce37a1ad-e7d9-45cf-92ff-b74b6d1a5c60.png">
                <CardProjectIcon src={IconBox} style={{height:"30px", width: "30px"}}/>
            </CardProjectMedia>
            <CardProjectContent>
                <CardProjectDescription>
                Project developed to complete the labenu course in full stack developer, with node, react and MySQL.
                </CardProjectDescription>
                <CardProjectButton>
                <LinkP href="https://github.com/ThalitaCesar/Lama---Ecommerce" target="_blank">See Project</LinkP>
                </CardProjectButton>
            </CardProjectContent>
        </CardProject>
        </CardProjectDiv>
       
        </Slider>
        </Mobile>

        <FlexBoxDesktop>
            
        <motion.div variants={slideIn("left", "spring", 0, 1.8)}
                                initial="hidden"
                                animate="show"> 
              <CardProjectDiv>
            <CardProjectNumber>
            Project  1 
            <CardProjectTitle>
            // arte_1_premium
            </CardProjectTitle>
            </CardProjectNumber> 
        <CardProject>
            <CardProjectMedia backgroundUrl={arte1}>
                <CardProjectIcon src={IconBox} style={{height:"30px", width: "30px"}}/>
            </CardProjectMedia>
            <CardProjectContent>
                <CardProjectDescription>
                Streaming documentary and film project about art, developed in react together with a team of developers.
                
                </CardProjectDescription>
                <CardProjectButton>
                <LinkP href="https://www.arte1premium.com.br/" target="_blank">See Project</LinkP>
                </CardProjectButton>
            </CardProjectContent>
        </CardProject>
        </CardProjectDiv>
        </motion.div>
    
        <motion.div variants={slideIn("right", "spring", 0, 1.8)}
                                initial="hidden"
                                animate="show">
            <CardProjectDiv>
            <CardProjectNumber>
            Project  2
            <CardProjectTitle>
            //  zenite
            </CardProjectTitle>
            </CardProjectNumber> 
        <CardProject>
            <CardProjectMedia backgroundUrl="https://user-images.githubusercontent.com/83131771/195320891-bfc56bcd-f6ef-4bc9-9574-a23b8f0b6835.png">
                <CardProjectIcon src={IconBox} style={{height:"30px", width: "30px"}}/>
            </CardProjectMedia>
            <CardProjectContent>
                <CardProjectDescription>
                Project developed with React, Styled Components and the ViaCEP API.
                </CardProjectDescription>
                <CardProjectButton>
                <LinkP href="https://github.com/ThalitaCesar/Zenite-API-ViaCEP" target="_blank">See Project</LinkP>
                </CardProjectButton>
            </CardProjectContent>
        </CardProject>
        </CardProjectDiv>
        </motion.div>

<motion.div variants={slideIn("left", "spring", 0, 1.8)}
                                initial="hidden"
                                animate="show">
            <CardProjectDiv>
            <CardProjectNumber>
            Project  3
            <CardProjectTitle>
            // lama_ecommerce
            </CardProjectTitle>
            </CardProjectNumber> 
        <CardProject>
            <CardProjectMedia backgroundUrl="https://user-images.githubusercontent.com/83131771/236363409-ce37a1ad-e7d9-45cf-92ff-b74b6d1a5c60.png">
                <CardProjectIcon src={IconBox} style={{height:"30px", width: "30px"}}/>
            </CardProjectMedia>
            <CardProjectContent>
                <CardProjectDescription>
                Project developed to complete the labenu course in full stack developer, with node, react and MySQL.
                </CardProjectDescription>
                <CardProjectButton>
                <LinkP href="https://github.com/ThalitaCesar/Lama---Ecommerce" target="_blank">See Project</LinkP>
                </CardProjectButton>
            </CardProjectContent>
        </CardProject>
        </CardProjectDiv>
        </motion.div>
        </FlexBoxDesktop>
        </>
    )
}