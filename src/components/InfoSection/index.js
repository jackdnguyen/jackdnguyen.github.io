import React from 'react'
import { Button } from '../ButtonElement'
import { InfoContainer, InfoWrapper, InfoRow, Column1, TextWrapper, TopLine, Heading, Subtitle, BtnWrap, Column2, ImgWrap, Img } from './InfoElements'
import { TagCloud } from 'react-tagcloud'

const data = [
    { value: 'JavaScript', count: 38, id:1 },
    { value: 'React', count: 30 },
    { value: 'Nodejs', count: 28 },
    { value: 'Express.js', count: 25 },
    { value: 'HTML5', count: 33 },
    { value: 'C/C++', count: 18 },
    { value: 'CSS3', count: 20 },
    { value: 'Git', count: 33 },
    { value: 'Angular', count: 28 },
    { value: 'Python', count: 25 },
    { value: 'Java', count: 20 },
    { value: 'NPM', count: 11 },
    { value: 'TypeScript', count: 15 },
  ]
  const options = {
    luminosity: 'dark',
    // hue:'red'
  }

const InfoSection = ({ lightBg, id, imgStart, topLine, lightText, headline, darkText, img, alt, primary, dark, dark2, buttonLabel, description2, objTwo }) => {
    return (
        <>
            <InfoContainer lightBg={lightBg} id={id}>
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>
                        <Column1> 
                            <TextWrapper>
                                <TopLine>{topLine}</TopLine>
                                <Heading lightText={lightText}>{headline}</Heading>
                                {objTwo ? <TagCloud minSize={20} maxSize={45} tags={data} colorOptions={options} style={{ marginBottom: '35px'}} /> 
                                        :
                                          <Subtitle darkText={darkText}>{description2}</Subtitle>
                                }
                                <BtnWrap>
                                    <Button to={buttonLabel}
                                        smooth={true}
                                        duration={500}
                                        spy={true}
                                        exact="true"
                                        offset={-80}
                                        primary={primary ? 1 : 0}
                                        dark={dark ? 1 : 0}
                                        dark2={dark2 ? 1 : 0}
                                    >{buttonLabel}</Button>
                                </BtnWrap>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={img} alt={alt} />
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    )
}

export default InfoSection