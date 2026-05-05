import Section from "../../system/section/section"
import Box from "../../system/box/box"
import './industry.css'
import Text from "../../system/text/text"

import IndustryData from "./industry-data"
import { useState } from "react"
import Button from "../../system/button/button"
import { AnimatePresence, motion } from 'motion/react'

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





    const showService = (services: Industry, i: number) => {
        setService(services)
        setActive(i)
    }




    return (
        <Section className="Industry-Section"  >
            <Box>
                <Text font="playful" size="semiLarge">Industry</Text>
                <Text>Top industry we work with and solve there problem</Text>
            </Box>

            <Box className="Industry">
                <Box className="Industry-Left" borderRadius="half" >
                    {IndustryData.map((data: Industry, i) => (
                        <Button
                            backgroundColor="LiteWhite"
                            className={active === i ? 'active' : ""}
                            size="large"
                            rounded="medium"
                            key={i}
                            onClick={() => showService(data, i)}

                        >
                            {data.industry}
                        </Button>
                    ))}
                </Box>
                <Box className="Industry-Right" borderRadius="half">
                    <AnimatePresence mode="wait">
                        <motion.div key={active} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.25 }}>
                            <Box className="Industry-Right-Card" >
                                {service.services.map((data: Service, index) => (
                                    <Box borderRadius="half" key={index} backgroundColor="LiteWhite" className="Industry-Right-Box">
                                        <Text font="playful" >{data.name}</Text>
                                        {data.description.map((data: string, index) => (
                                            <Text size="small" key={index}>{data}</Text>
                                        ))}
                                    </Box>
                                ))}

                            </Box>
                        </motion.div>
                    </AnimatePresence>

                </Box>
            </Box>
        </Section>
    )
}

export default Industry