import Section from "../../system/section/section"
import Text from "../../system/text/text"
import './about.css'
import AboutData from "./about-data"

import Box from "../../system/box/box"

const About = () => {
    return (
        <Section className="About" >
            <Text size="semiLarge" font="playful">What do you get
                by choosing NorthGrid?</Text>
            {AboutData.map((data) => (
                <Box borderRadius="half" backgroundColor="White" key={data.id} className={`About-Card-${data.id}`}>
                   
                   
                        {data.items.map((text, textKey) => (
                            <Box backgroundColor="White">
                            <Text className="About-Card-Info-Text" key={textKey}>✔  {text}</Text>
                            <br />
                            <hr />
                            </Box>
                        ))}
                    
                </Box>
            ))}
        </Section>
    )
}

export default About