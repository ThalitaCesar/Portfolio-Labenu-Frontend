import { Card, CardContent, CardImg, CardText, CardTitle, SpanTitleCard, Time, Description, CardFlex  } from "./styles";
import labenu from '../assets/labenulogo.png'
import cev from '../assets/cev-logo.png'
import senac from '../assets/senac-logo.jpg'
import Grid from '@material-ui/core/Grid';
import Item from '@material-ui/core/Grid';


export function CardEducation() {
  
    return (
        <CardFlex>
        <Grid container spacing={2} style={{paddingLeft: "30px"}}>
        <Grid item xs={12} sm={6} md={4}>
          <Item>
          <Card>
                <CardImg src={cev} style={{maxWidth:"260px", minHeight:"168px"}}/>
                <CardContent>
                    <CardTitle>
                    Cursos Avulsos
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
          </Item>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Item>
          <Card>
                <CardImg src={senac} style={{maxWidth:"260px", minHeight:"168px"}}/>
                <CardContent>
                    <CardTitle>
                    Técnico em Informática
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

          </Item>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Item>
          <Card>
                <CardImg src={labenu} style={{maxWidth:"260px", minHeight:"168px"}}/>
                <CardContent>
                    <CardTitle>
                    Full Stack Developer Noturno 
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
          </Item>
        </Grid>
      </Grid>
      </CardFlex>
    )
}