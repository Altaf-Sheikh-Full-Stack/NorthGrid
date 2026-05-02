import Section from "../../system/section/section"
import Box from "../../system/box/box"
import './industry.css'
import Text from "../../system/text/text"

import IndustryData from "./industry-data"
import { useState } from "react"
import Button from "../../system/button/button"


const Industry = () => {

    const [active, setActive] = useState(0)

    interface Service {
        name: string,
        description: string[]
    }

    interface Industry {
        industry: string,
        services: Service[]
    }


    const [service, setService] = useState<Industry>(IndustryData[0])





    const showService = (services: Industry, i:number) => {
        setService(services)
        setActive(i)
    }




    return (
        <Section className="Industry">
            <Box className="Industry-Left">
                {IndustryData.map((data: Industry, i) => (
                    <Button backgroundColor="LiteWhite"  className={active === i ? 'active': ""} size="large"  rounded="medium" key={i} onClick={() => showService(data, i)}>{data.industry}</Button>
                ))}
            </Box>
            <Box className="Industry-Right">
                {service.services.map((data: Service, index) => (
                    <Box borderRadius="half" key={index} backgroundColor="LiteWhite" className="Industry-Right-Box">
                        <Text font="playful" >{data.name}</Text>
                        {data.description.map((data: string, index) => (    
                            <Text size="small" key={index}>{data}</Text>
                        ))}
                    </Box>
                ))}
            </Box>
        </Section>
    )
}

export default Industry