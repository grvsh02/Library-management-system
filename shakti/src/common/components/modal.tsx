import React, {ReactNode} from 'react';
import Card from "./card";

type ModalProps = {
    isOpen?: boolean;
    children?: ReactNode;
    onClose?: () => void;
}

const Modal = ({children, isOpen, onClose = () => {}}: ModalProps) => {

    const [opener, setOpener] = React.useState(isOpen);

    React.useEffect(() => {
        setOpener(isOpen);
    },[isOpen])

    return (
        <div className={`${isOpen ? "flex" : "hidden"} justify-center items-center fixed z-10 inset-0 w-full h-full overflow-auto bg-gray-600 bg-opacity-50`}>
            <Card className="p-5 rounded">
                <div className="flex justify-end">
                    <i className="fa-solid fa-xmark hover:cursor-pointer" onClick={() => {
                        setOpener(false);
                        onClose();
                    }}/>
                </div>
                {children}
            </Card>
        </div>
    )
}

export default Modal;