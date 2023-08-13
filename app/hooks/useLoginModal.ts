import { create } from 'zustand';//state management

interface LoginModalStore {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;

}

const useLoginModal = create<LoginModalStore>((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen : true }),
    onClose: () => set({ isOpen : false }),
}))

export default useLoginModal;