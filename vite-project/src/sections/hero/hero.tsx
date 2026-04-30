import Section from "../../system/section/section"
import Text from "../../system/text/text"
import Button from "../../system/button/button"
import img1 from '../../assets/women.webp'
import './hero.css'
import Box from "../../system/box/box"

const Hero = () => {
    return (
        <Section className="Hero">
            <Box className="Hero-info" backgroundColor="Brand">
                <Box className="Hero-info-text" backgroundColor="Brand">
                    {/* <Text size="small" color="white">⭐4.7 Rated </Text> */}
                    <Text color="white" type="heading" font="playful" size="large">Losing Customers Because of Bad Technology?</Text>
                    <Text color="lite" >Then you’re in the right place. At (CompanyName), we build modern, AI-powered systems from the ground up—designed around how your customers actually use your product.</Text>
                </Box>
                <Box className="Hero-info-buttons" backgroundColor="Brand">
                    <Button backgroundColor="White" rounded="large" size="large" color="dark">Let's have a quick chat</Button>
                </Box>
            </Box>
            <Box className="Hero-Content">
                <Box className="Hero-Content-Child-1">
                   
                        <img className="blur"  src={img1} alt="If image not load please update your browser" loading="lazy" fetchPriority="high" />
                  

                </Box>
            </Box>
        </Section>
    )
}

export default Hero