import { Card, CardContent, CardImg, CardText, CardTitle, Time, Description } from "./styles";
import labenu from '../assets/labenulogo.png';
import cev from '../assets/cev-logo.png';
import senac from '../assets/senac-logo.jpg';
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "../styles.css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

export function CardEducation() {

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
            slidesPerView: 3,
            spaceBetween: 2,
          },
          "@1.50": {
            slidesPerView: 3,
            spaceBetween: 2,
          }
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Card>
            <CardImg backgroundUrl={cev} style={{ maxWidth: "260px", minHeight: "168px" }} />
            <CardContent>
              <CardTitle>
                Individual Courses
              </CardTitle>
              <CardText>
                <Time>
                  03/2021 • 10/2021
                </Time>
                <Description>
                  // Learned Languages: Programming language, HTML5, CSS3, and JavaScript.
                </Description>
              </CardText>
            </CardContent>
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card>
            <CardImg backgroundUrl={senac} style={{ maxWidth: "260px", minHeight: "168px" }} />
            <CardContent>
              <CardTitle>
                Computer Technician
              </CardTitle>
              <CardText>
                <Time>
                  06/2021 • 06/2022
                </Time>
                <Description>
                  // Modules: hardware, network administration, and web development with HTML5, CSS3, JavaScript, and MySQL.
                </Description>
              </CardText>
            </CardContent>
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card>
            <CardImg backgroundUrl={labenu} style={{ maxWidth: "260px", minHeight: "168px" }} />
            <CardContent>
              <CardTitle>
                Full Stack Developer (Night Course)
              </CardTitle>
              <CardText>
                <Time>
                  10/2021 • 10/2022
                </Time>
                <Description>
                  // Learned Languages: HTML5, CSS3, JavaScript, React, Jest, TypeScript, Node.js, MySQL, AWS, and Firebase.
                </Description>
              </CardText>
            </CardContent>
          </Card>
        </SwiperSlide>
      </Swiper>
    </>
  )
}
