import Section from "../../system/section/section"
import Text from "../../system/text/text"
import Button from "../../system/button/button"
import './navbar.css'

import Box from "../../system/box/box"

const Navbar = () => {
    return (
        <Section className='Navbar' >
            <Box className='Navbar-Content' >
                <Text>Home</Text>
                <Text>Service</Text>
                <Text>Case study</Text>
                <Text>Pricing</Text>
            </Box>
            <Button backgroundColor="Brand"  size="large" color="light" rounded="large">Book a meeting</Button>
        </Section>
    )
}

export default Navbar
