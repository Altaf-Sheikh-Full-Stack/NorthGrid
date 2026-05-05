import Section from "../../system/section/section"
import Text from "../../system/text/text"
import Button from "../../system/button/button"
import './navbar.css'
import NavData from "./nav-data"
import Box from "../../system/box/box"
import { useEffect, useRef, useState } from "react"


const Navbar = () => {

    const [active, setActive] = useState<boolean>(false)
    const dorpdown = useRef<HTMLDivElement | null>(null)

    const Show = () => {
        setActive(true)
    }

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            const target = event.target;

            if (
                dorpdown.current &&
                target instanceof Node &&
                !dorpdown.current.contains(target)
            ) {
                setActive(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);



    return (

        <Section>
            <Section className='Navbar' backgroundColor="LiteWhite" >

                <Box className='Navbar-Content' backgroundColor="LiteWhite" >
                    <Text font="playful" >NorthGrid</Text>
                    <Text size="small">About us</Text>
                    <Text size="small"> <p ref={dorpdown} onPointerEnter={Show} >Solutions</p> </Text>
                    <Text size="small">CaseStudy</Text>
                    <Text size="small">Pricing</Text>
                </Box>
               <a href="https://calendly.com/defaultcompny0/30min"> <Button backgroundColor="Brand" size="large" color="light" rounded="large">Book a meeting</Button></a>
            </Section>


            <Section backgroundColor="LiteWhite" className='Navbar-Mobile' >
                <Text font="playful" >NorthGrid</Text>

                <Box className='Navbar-Mobile-Content' >
                    <Button backgroundColor="Brand" size="large" color="light" rounded="large">Book a meeting</Button>
                </Box>
            </Section>


            {active && <Section className="Navbar-Content-Solution" >
                <div ref={dorpdown} className="Navbar-Content-Solution-Child">
                    {NavData.map((data) => (
                        <Box backgroundColor="LiteWhite" className="Navbar-Content-Solution-Child-Card">
                            <Text font="playful">{data.name}</Text>
                            <Box borderRadius="half" className="Navbar-Content-Solution-Child-Card-Child">
                                {data.info.map((info) => (
                                    <Text size="small">{info}</Text>
                                ))}
                            </Box>
                        </Box>
                    ))}
                </div>
            </Section>}

        </Section>
    )
}

export default Navbar
