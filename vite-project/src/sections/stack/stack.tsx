import Box from "../../system/box/box"
import Section from "../../system/section/section"
import stackData from "./stack-data"
import Text from "../../system/text/text"
import './stack.css'

const Stack = () => {
    return (
        <Section className="Stack">
            {stackData.map((data) => (
                <Box backgroundColor="LiteWhite" className="Stack-Box" borderRadius="half">
                    <Text font="playful" >{data.name}</Text>
                    <Box backgroundColor="LiteWhite" className="Stack-Box-Info">
                        {data.items.map((data) => (
                            <Text>{data}</Text>
                        ))}
                    </Box>
                </Box>
            ))}
        </Section>
    )
}


export default Stack