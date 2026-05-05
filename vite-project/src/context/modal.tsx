import { create } from "zustand"



type MoreType = {
    problem: string,
    solution: string[]
}


interface ModalContent {
    img: string
    name: string,
    more: MoreType[]
    outcome: string[]
    heading:string
    description:string
}

interface ModalStore {
    modal: ModalContent | null
    openModal: (value: ModalContent) => void
    closeModal: () => void
}

const ModalContext = create<ModalStore>((set) => ({
    modal: null,
    openModal: (value) => set({ modal: value }),
    closeModal: () => set({ modal: null })
}))


export default ModalContext