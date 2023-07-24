interface ModalProps {
    isOpen?: boolean;
    onClose: () => void;
    onSubmit: () => void;
    title?: string;
    body?: React.ReactElement;
    footer?: React.ReactElement;
    actionLabel: String;
    disabled?: boolean;
    secondaryAction?: () => void;
    secondaryLabel?: String;
}
const Modal: React.FC<ModalProps>= ({
    isOpen,
    onClose,
    
}) => {
    return ( <div>
        Modal
    </div> );
}
 
export default Modal;