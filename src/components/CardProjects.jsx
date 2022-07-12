import { CardProject, CardProjectButton, CardProjectContent, CardProjectDescription, CardProjectIcon,LinkP, CardProjectMedia, CardProjectNumber, CardProjectTitle, CardProjectFlex, CardProjectDiv } from "./styles";
import Arte1 from '../assets/Arte1Logo.png'
import IconBox from '../assets/IconBox.png'
import cientik from '../assets/cientik.png'
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "../styles.css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

export function CardProjects() {
    return (

        <>

<Swiper
        slidesPerView={3}
        spaceBetween={2}
        pagination={{
          clickable: true
        }}
        breakpoints={{
          "@0.00": {
            slidesPerView: 1,
            spaceBetween: 3
          },
          "@0.75": {
            slidesPerView: 1,
            spaceBetween: 10
          },
          "@1.00": {
            slidesPerView: 1,
            spaceBetween: 40
          },
          "@1.50": {
            slidesPerView: 3,
            spaceBetween: 10,
          }
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide> <CardProjectDiv>
            <CardProjectNumber>
            Projeto 1 
            <CardProjectTitle>
            // arte_1_premium
            </CardProjectTitle>
            </CardProjectNumber> 
        <CardProject>
            <CardProjectMedia backgroundUrl={Arte1}>
                <CardProjectIcon src={IconBox} style={{height:"30px", width: "30px"}}/>
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
            </SwiperSlide>

        <SwiperSlide>
            <CardProjectDiv>
            <CardProjectNumber>
            Projeto 2
            <CardProjectTitle>
            // cientik
            </CardProjectTitle>
            </CardProjectNumber> 
        <CardProject>
            <CardProjectMedia backgroundUrl={cientik}>
                <CardProjectIcon src={IconBox} style={{height:"30px", width: "30px"}}/>
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
        </SwiperSlide>

        <SwiperSlide>
            <CardProjectDiv>
            <CardProjectNumber>
            Projeto 2
            <CardProjectTitle>
            // cientik
            </CardProjectTitle>
            </CardProjectNumber> 
        <CardProject>
            <CardProjectMedia backgroundUrl={cientik}>
                <CardProjectIcon src={IconBox} style={{height:"30px", width: "30px"}}/>
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
        </SwiperSlide>
        
      </Swiper>




        </>
    )
}