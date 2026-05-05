import './modal.css'
import Section from '../section/section'
import { createPortal } from 'react-dom'
import { useEffect } from 'react'
import { AnimatePresence, motion } from 'motion/react'


interface ModalProbs {
    children?: any
    open: boolean
}

const backdrop = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 }
}

const modal = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0 },
    exit: { opacity: 0, scale: 0.95, y: 20 }
}



const Modal = ({ children, open }: ModalProbs) => {

    useEffect(() => {
        document.body.style.overflow = open ? 'hidden' : ''
        return () => {
            document.body.style.overflow = ''
        }
    }, [open])

    return createPortal(
        <motion.div
            className="ModalOverlay"
            variants={backdrop}
            initial={false}
            animate={open ? "visible" : "hidden"}
            style={{ pointerEvents: open ? 'auto' : 'none' }}
            transition={{ duration: 0.2 }}
        >
            <motion.div
                className="ModalContent"
                variants={modal}
                initial={false}
                animate={open ? "visible" : "hidden"}
                transition={{ duration: 0.25, ease: 'easeOut' }}
            >
                <Section backgroundColor="White">
                    {children}
                </Section>
            </motion.div>
        </motion.div>,
        document.body
    )
}
export default Modal