import Modal from "../../../system/modal/modal"
import Box from "../../../system/box/box"
import ModalContext from "../../../context/modal"
import Text from "../../../system/text/text"
import './more-info.css'
import Button from "../../../system/button/button"


const MoreInfo = () => {

    const modal = ModalContext((s) => s.modal)
    const close = ModalContext(s => s.closeModal)


    return (
        <Modal open={!!modal} >

            <Box className="MoreInfo" backgroundColor="White">
                <img className="MoreInfo-img" src={modal?.img} alt="" />


                <Box className="MoreInfo-Info">
                    <Box className="MoreInfo-Info-Text">
                        <Text size="semiLarge" type="subHeading" font="playful">{modal?.heading}</Text>
                        <Text>{modal?.description}</Text>
                    </Box>
                    <Box className="MoreInfo-Info-Buttons">
                        <Button onClick={close} backgroundColor="LiteWhite" rounded="large" size="large">Close</Button>
                        <Button backgroundColor="Brand" color="light" rounded="large" size="large">Visit website</Button>
                    </Box>

                </Box>
            </Box>

            <Box className="MoreInfo-Problem" >
                <Text className="MoreInfo-Problem-Heading" size="semiLarge" type="heading" font="playful">How we solved the problem to reach outcome</Text>
                <Box className="MoreInfo-Problem-Parent">

                    {modal?.more.map((data) => (
                        <Box className="MoreInfo-Problem-Card" backgroundColor="LiteWhite" borderRadius="half">
                            <Box backgroundColor="White" borderRadius="half" className="MoreInfo-Problem-Card-Problem"><Text >{data.problem}</Text></Box>

                            <Box className="MoreInfo-Problem-Card-Solution" borderRadius="half">
                                {data.solution.map((data) => (
                                    <Text>{data}</Text>
                                ))}
                            </Box>
                        </Box>
                    ))}
                </Box>
            </Box>

        </Modal>
    )
}

export default MoreInfo