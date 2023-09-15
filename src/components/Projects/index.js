import React from 'react'
import { ProjectsContainer, ProjectH1, ProjectWrapper, ProjectCard, ProjectIcon, ProjectH2, ProjectP } from './ProjectElements'
import Icon1 from '../../images/svg-9.svg'
import Icon2 from '../../images/svg-8.svg'
import Icon3 from '../../images/svg-6.svg'
import Icon4 from '../../images/svg-10.svg'
import { Button } from '../ButtonElement'

const Projects = () => {
    // const externalLink = () =>{
    //     window.open('https://github.com/jackdnguyen', '_blank');
    // }
    return (
        <ProjectsContainer id="Projects">
            <ProjectH1>Projects</ProjectH1>
            <ProjectWrapper>
                <a href="https://container-app-trkmsk5lp3mdw.gentlerock-7f513dc1.westus2.azurecontainerapps.io/" target="_blank" rel="noreferrer">
                <ProjectCard>
                    <ProjectIcon src={Icon4}/>
                    <ProjectH2>Paper Trading</ProjectH2>
                    <ProjectP>
                        Platform to trade stocks with virtual currency.
                    </ProjectP>
                </ProjectCard>
                </a>
                <a href="https://jackdnguyen.github.io/sorting-visualizer/" target="_blank" rel="noreferrer">
                <ProjectCard>
                    <ProjectIcon src={Icon1}/>
                    <ProjectH2>Sorting Visualizer</ProjectH2>
                    <ProjectP>
                        Pseudo-Code and chart visualizations of popular sorting algorithms.
                    </ProjectP>
                </ProjectCard>
                </a>
                <a href="https://jackdnguyen.github.io/covid19-data-viewer/" target="_blank" rel="noreferrer">
                <ProjectCard>
                    <ProjectIcon src={Icon2} />
                    <ProjectH2>COVID-19 Data Viewer</ProjectH2>
                    <ProjectP>
                        Examines the timeline of the COVID-19 pandemic.
                    </ProjectP>
                </ProjectCard>
                </a>
                <a href="https://github.com/jackdnguyen/Price-Scraping-Tool" target="_blank" rel="noreferrer">
                <ProjectCard>
                    <ProjectIcon src={Icon3} />
                    <ProjectH2>Price-Scraping Tool</ProjectH2>
                    <ProjectP>
                        Built for Coast Appliance. Gathers competitive pricing intelligence.
                    </ProjectP>
                </ProjectCard>
                </a>
            </ProjectWrapper>
            <Button
                to='Contact'
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
                primary="true"
                dark="true"
                dark2="true"
            >Contact Me</Button>
        </ProjectsContainer>
    )
}

export default Projects