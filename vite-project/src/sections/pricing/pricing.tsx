import Section from "../../system/section/section"
import './pricing.css'
import Text from "../../system/text/text"
import Button from "../../system/button/button"
import Box from "../../system/box/box"
import PricingData from "./pricing-data"
import { useState } from "react"
import { AnimatePresence, motion } from 'motion/react'
interface Tiers {
    name: string
    price_per_month: number
    includes: string[]
}

interface PricingType {
    name: string
    focus: string
    tiers: Tiers[]
}

const Pricing = () => {


    const [pricing, setPricing] = useState(PricingData[0])
    const [active, setActive] = useState(0)

    const Show = (data: PricingType, index: number) => {
        setPricing(data)
        setActive(index)
    }

    return (
        <Section className="Pricing">
            <Box className="Pricing-Header">
                <Box>
                    <Text size="large" font="playful">Our pricing</Text>
                    <Text>Best suitable pricing for all business needs</Text>
                </Box>

                <Box className="Pricing-Buttons">
                    {PricingData.map((data, index) => (
                        <Button className={active == index ? 'active' : ''} size="large" rounded="large" backgroundColor="LiteWhite" onClick={() => Show(data, index)} key={index} >{data.name}</Button>
                    ))}
                </Box>
            </Box>
            <Box>




                <AnimatePresence mode="wait">
                    <motion.div key={active} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.25 }}>
                        <Box className="Pricing-Container">
                            {pricing.tiers.map((data) => (
                                <Box className="Pricing-Card" backgroundColor="LiteWhite">
                                    <Box className="Pricing-Card-Name" backgroundColor="LiteWhite">
                                        <Text font="playful" size="semiLarge">{data.name}</Text>
                                    </Box>
                                    <Box className="Pricing-Card-Info" backgroundColor="LiteWhite">
                                        {data.includes.map((data) => (
                                            <Text size="small" color="black">{data}</Text>
                                        ))}
                                    </Box>
                                   <a href="https://wa.me/9318486583"> <Button rounded="large" size="large" backgroundColor="Brand" color="light">Get started</Button></a>
                                </Box>
                            ))}
                        </Box>
                    </motion.div>
                </AnimatePresence>


            </Box>

        </Section>
    )
}


export default Pricing