import Section from "../../system/section/section"
import './pricing.css'
import Text from "../../system/text/text"
import Button from "../../system/button/button"
import Box from "../../system/box/box"

const Pricing = () => {
    return (
        <Section className="Pricing">
            <Box padding="half" borderRadius="half" className="Pricing-Card">
                <Text>Starter</Text>
                <Text>Get started with Fluence AI at no cost</Text>
                <Text>Free</Text>
                <Button rounded="large" size="large" padding="20px">Get started</Button>
            </Box>
            <Box padding="half" borderRadius="half" className="Pricing-Card">
                <Text>Starter</Text>
                <Text>Get started with Fluence AI at no cost</Text>
                <Text>Free</Text>
                <Button rounded="large" size="large" padding="20px">Get started</Button>
            </Box>
            <Box padding="half" borderRadius="half" className="Pricing-Card">
                <Text>Starter</Text>
                <Text>Get started with Fluence AI at no cost</Text>
                <Text>Free</Text>
                <Button rounded="large" size="large" padding="20px">Get started</Button>
            </Box>
            <Box padding="half" borderRadius="half" className="Pricing-Card">
                <Text>Starter</Text>
                <Text>Get started with Fluence AI at no cost</Text>
                <Text>Free</Text>
                <Button rounded="large" size="large" padding="20px">Get started</Button>
            </Box>
            
        </Section>
    )
}


export default Pricing