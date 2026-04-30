import './modal.css'
import Section from '../section/section'




interface ModalProbs {
    children?: any
    open: boolean
}



const Modal = ({ children, open }: ModalProbs) => {

    if(!open) return null


    return (

        <div className='Modal'>
            <Section backgroundColor='White'>
                {children}
            </Section>
        </div>

    )
}

export default Modal