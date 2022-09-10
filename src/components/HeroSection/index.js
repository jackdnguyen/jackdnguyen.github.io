import React, {useState} from 'react'
import Video from '../../videos/video.mp4'
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight } from './HeroElements'
import { Button } from '../ButtonElement';
const HeroSection = () => {
  const [hover, setHover] = useState(false)

  const onHover = () => {
    setHover(!hover)
  }
  return (
    <HeroContainer id="home">
        <HeroBg>
            <VideoBg autoPlay loop muted playsinline src= {Video} type='video/mp4' />
        </HeroBg>
    <HeroContent>
      <HeroH1>Hi, I'm Jack Nguyen</HeroH1>
      {/* <HeroH1>Software Developer</HeroH1> */}
      <HeroP>
        Software Developer
      </HeroP>
      <HeroBtnWrapper>
        <Button to="about"
        onMouseEnter={onHover} 
        onMouseLeave={onHover}
        smooth={true}
        duration={500}
        spy={true}
        exact="true"
        offset={-80}
        >
          About Me {hover ? <ArrowForward /> : <ArrowRight/>}
        </Button>
      </HeroBtnWrapper>
    </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection