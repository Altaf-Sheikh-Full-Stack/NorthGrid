import { create } from "zustand"



type MoreType = {
    problem: string,
    solution: string
}


type Tech = {
    research: string[],
    design: string[],
    frontend: string[],
    backend: string[],
    testing: string[],
    deployment: string[],
    markting: string[]
}

interface ModalContent {
    img: string
    name: string,
    more: MoreType[]
    tech: Tech
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