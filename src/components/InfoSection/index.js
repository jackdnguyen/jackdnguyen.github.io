import React from 'react'
import { Button } from 'react-scroll'
import { InfoContainer, InfoWrapper, InfoRow, Column1, TextWrapper, TopLine, Heading, Subtitle, BtnWrap, Column2, ImgWrap, Img } from './InfoElements'
const InfoSection = () => {
  return (
    <>
        <InfoContainer lightBg={lightBg} id={id}>
            <InfoWrapper>
                <InfoRow imgStart={imgStart}>
                    <Column1>
                    <TextWrapper>
                        <TopLine>{topLine}</TopLine>
                        <Heading lightText={lightText}>{headline}</Heading>    
                        <Subtitle darkText={darkText}>Subtitle</Subtitle>
                        <BtnWrap>
                            <Button to="home" />
                        </BtnWrap>
                    </TextWrapper>
                    </Column1>
                    <Column2>
                        <ImgWrap>
                            <Img />
                        </ImgWrap>
                    </Column2>
                </InfoRow>
            </InfoWrapper>
        </InfoContainer>
    </>
  )
}

export default InfoSection