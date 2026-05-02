import Section from "../../system/section/section"
import Text from "../../system/text/text"
import './about.css'

import Box from "../../system/box/box"

const About = () => {
    return (
        <Section className="About" >
            <Text className="About-heading" type="subHeading" size="semiLarge" font="playful">Our mission is to assist startups and enterprises in creating an emotional bond between their products and satisfied, engaged customers.</Text>
            <Box className="About-Stats" backgroundColor="White">
                <Box className="About-Stats-Client" backgroundColor="White">
                    <Box borderRadius="half" backgroundColor="LiteWhite" padding="half">
                        <Text color="black">70+ client</Text>
                    </Box>
                    <Box borderRadius="half" backgroundColor="LiteWhite" padding="half">
                        <Text color="black">100% stafiction rate</Text>
                    </Box>


                    <Box borderRadius="half" backgroundColor="LiteWhite" padding="half">
                        <Text color="black">3 years of exprince</Text>
                    </Box>
                </Box>
            </Box>
        </Section>
    )
}

export default About