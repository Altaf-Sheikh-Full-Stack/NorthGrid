import Section from "../../system/section/section"
import Box from "../../system/box/box"
import './industry.css'
import Text from "../../system/text/text"

import IndustryData from "./industry-data"
import { useState } from "react"
import Button from "../../system/button/button"


const Industry = () => {

    interface Service {
        name: string,
        description: string[]
    }

    interface Industry {
        industry: string,
        services: Service[]
    }


    const [service, setService] = useState<Industry>(IndustryData[0])





    const showService = (services: Industry) => {
        setService(services)
    }




    return (
        <Section className="Industry">
            <Box className="Industry-Left">
                {IndustryData.map((data: Industry, index) => (
                    <Button key={index} onClick={() => showService(data)}>{data.industry}</Button>
                ))}
            </Box>
            <Box className="Industry-Right">
                {service.services.map((data: Service, index) => (
                    <Box key={index} backgroundColor="LiteWhite" className="Industry-Right-Box">
                        <Text font="playful" >{data.name}</Text>
                        {data.description.map((data: string) => (
                            <ul>
                                <li>{data}</li>
                            </ul>
                        ))}
                    </Box>
                ))}
            </Box>
        </Section>
    )
}

export default Industry