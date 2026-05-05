import Section from "../../system/section/section"
import Text from "../../system/text/text"
import Box from "../../system/box/box"
import './casestudy.css'
import data from './casedata'
import Button from "../../system/button/button"
import ModalContext from "../../context/modal"
import { useRef } from "react"



type MoreType = {
    problem: string,
    solution: string[]
}


interface CaseStudyProb {
    img: string
    name: string,
    more: MoreType[]
    outcome: string[]
    heading: string
    description: string

}





const CaseStudy = () => {


    const divRef = useRef<HTMLDivElement | null>(null);


    // const ScrollLeft = () => {


    //     const elem = divRef.current

    //     elem?.scrollBy({
    //         left: -1500,
    //         behavior: "smooth",
    //     });


    // }

    // const ScrollRight = () => {

    //     const elem = divRef.current

    //     elem?.scrollBy({
    //         left: 1500,
    //         behavior: "smooth",
    //     });


    // }


    const setModal = ModalContext((e) => e.openModal)

    const openModals = (data: CaseStudyProb) => {
        setModal({
            img: data.img,
            name: data.name,
            more: data.more,
            outcome: data.outcome,
            heading: data.heading,
            description: data.description
        })
    }


    return (
        <Section className="CaseStudy">
            <div className="CaseStudy-carousel" ref={divRef}>
                {data.map((data: CaseStudyProb, index) => (
                    <div onClick={() => openModals(data)} style={{cursor:'pointer'}}>
                        <Box key={index} className='CaseStudy-Box' borderRadius="half" >
                            <Box borderRadius="half" className={`CaseStudy-Box-Imgs`}  >
                                <img className="CaseStudy-Img" src={data.img} alt="" />
                            </Box>
                            <Box className="CaseStudy-Info" borderRadius="half">
                                <Box className="CaseStudy-Info-Heading">
                                    <Text size="semiLarge" type="heading" font="playful">{data.name}</Text>
                                </Box>
                                <Box className="CaseStudy-Info-Buttons">
                                    {/* <Button backgroundColor="LiteWhite" rounded="large"  color="dark"></Button> */}
                                    <Button  size="large" backgroundColor="LiteWhite" rounded="large" color="dark">View full case study</Button>
                                </Box>
                            </Box>
                        </Box>
                    </div>
                ))}

            </div>

            {/* 
            <Box className="CaseStudy-Direction">
                <Button rounded="large" size="large" backgroundColor="LiteWhite" onClick={ScrollLeft}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"  viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5" />
                </svg></Button>
                <Button rounded="large" size="large" backgroundColor="LiteWhite" onClick={ScrollRight}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8" />
                </svg></Button>
            </Box> */}
        </Section>
    )
}

export default CaseStudy