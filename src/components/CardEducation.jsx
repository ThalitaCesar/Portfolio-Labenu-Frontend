import { Card, CardContent, CardImg, CardText, CardTitle, SpanTitleCard, Time, Description, CardFlex  } from "./styles";
import labenu from '../assets/labenulogo.png'
import cev from '../assets/cev-logo.png'
import senac from '../assets/senac-logo.jpg'
import Slider from "react-slick";

export function CardEducation() {
    let settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    return (
        <div>
            {/* <Slider {...settings}> */}
            <CardFlex>
            <Card>
                <CardImg src={cev} style={{maxWidth:"280px", minHeight:"168px"}}/>
                <CardContent>
                    <CardTitle>
                    Cursos Avulsos
                    <SpanTitleCard> // curso-em-video</SpanTitleCard>
                    </CardTitle>
                    <CardText>
                        <Time>
                            03/2021 • 10/2021
                        </Time>
                        <Description>
                          //  Linguagens Aprendidas: Linguagem de programação, HTML5, CSS3 e JavaScript.

                        </Description>
                    </CardText>
                </CardContent>
            </Card>

            <Card>
                <CardImg src={senac} style={{maxWidth:"280px", minHeight:"168px"}}/>
                <CardContent>
                    <CardTitle>
                    Técnico em Informática
                    <SpanTitleCard> // senac</SpanTitleCard>
                    </CardTitle>
                    <CardText>
                        <Time>
                            06/2021 • 06/2022
                        </Time>
                        <Description>
                          // Módulos: hardware, administração de redes e desenvolvimento web com HTML5, CSS3, JavaScript e MySQL.

                        </Description>
                    </CardText>
                </CardContent>
            </Card>

            <Card>
                <CardImg src={labenu} style={{maxWidth:"280px", minHeight:"168px"}}/>
                <CardContent>
                    <CardTitle>
                    Desenvolvimento Web Full Stack Noturno 
                    <SpanTitleCard> // labenu</SpanTitleCard>
                    </CardTitle>
                    <CardText>
                        <Time>
                            10/2021 • 10/2022
                        </Time>
                        <Description>
                          //  Linguagens Aprendidas: HTML5, CSS3, JavaScript, React, Jest, Typescript, Node.js, MySQL, Aws e Firebase.

                        </Description>
                    </CardText>
                </CardContent>
            </Card>
            </CardFlex>
            {/* </Slider> */}
        </div>
    )
}