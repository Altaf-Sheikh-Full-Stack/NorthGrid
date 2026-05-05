import Box from "../../system/box/box"
import Section from "../../system/section/section"
import stackData from "./stack-data"
import Text from "../../system/text/text"
import './stack.css'
import Button from "../../system/button/button"

const Stack = () => {

    return (
        <Section className="Stack">

                <Box >
                    <Text size="semiLarge" font="playful">Our expertise</Text>
                    <Text>The the we are expert in</Text>
                </Box>
                {stackData.map((data, index) => (
                    <Box backgroundColor="LiteWhite" borderRadius="half" className="Stack-Box-Child" key={index}>
                        <Text>{data.name}</Text>
                        <Box backgroundColor="LiteWhite" className="Stack-Box-Child-Buttons">
                            {data.items.map((data, i) => (
                                <Button rounded="large" size="large" backgroundColor="White" key={i}>{data}</Button>
                            ))}
                        </Box>
                    </Box>
                ))}
          
        </Section>
    )
}


export default Stack