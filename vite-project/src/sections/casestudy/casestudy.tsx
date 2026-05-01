import Section from "../../system/section/section"
import Text from "../../system/text/text"
import Box from "../../system/box/box"
import './casestudy.css'
import data from './casedata'
import Button from "../../system/button/button"
import ModalContext from "../../context/modal"



type MoreType = {
    problem: string,
    solution: string
}

type Tech = {
    research:string[],
    design:string[],
    frontend:string[],
    backend:string[],
    testing:string[],
    deployment:string[],
    markting:string[]
}

interface CaseStudyProb {
    img: string
    name: string,
    more: MoreType[]
    tech:Tech
}



const CaseStudy = () => {


    const setModal = ModalContext((e) => e.openModal)

    const openModals = (data: CaseStudyProb) => {
        setModal({
            img: data.img,
            name: data.name,
            tech:data.tech,
            more: data.more,
        })
    }


    return (
        <Section className="CaseStudy">
            <Box className="CaseStudy-carousel">
                {data.map((data: CaseStudyProb, index) => (
                    <Box key={index} className='CaseStudy-Box' borderRadius="full" backgroundColor="LiteWhite">
                        <Box borderRadius="full" className={`CaseStudy-Box-Imgs`}  >
                            <img className="CaseStudy-Img" src={data.img} alt="" />
                        </Box>
                        <Box className="CaseStudy-Info" borderRadius="full">
                            <Box className="CaseStudy-Info-Heading">
                                <Text  size="semiLarge" type="heading" font="playful">{data.name}</Text>
                            </Box>
                            <Box>
                                <Button backgroundColor="LiteWhite" rounded="large" size="large" color="dark">Vist webiste</Button>
                                <Button onClick={() => openModals(data)} backgroundColor="Brand" rounded="large" size="large" color="light">Learn more</Button>
                            </Box>
                        </Box>
                    </Box>
                ))}

            </Box>

            <Box>
                <Button>Left</Button>
                <Button>Right</Button>
            </Box>


        </Section>
    )
}

export default CaseStudy