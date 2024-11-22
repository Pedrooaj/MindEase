import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { toast } from "react-toastify";

// Tipagem das props do modal
interface MyVerticallyCenteredModalProps {
    show: boolean;
    onHide: () => void;
    title: string;
    subtitle: string;
    content: React.ReactNode;
}

const MyVerticallyCenteredModal: React.FC<MyVerticallyCenteredModalProps> = (props) => {
    const handleClick = () => {
        props.onHide();
        toast.success("Consulta agendada com sucesso", { position: "top-center", autoClose: 3000 });
    }
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            
        >
            <Modal.Header style={{ backgroundColor: "#BFC5D2"}} closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {props.title}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body style={{ backgroundColor: "#BFC5D2"}}>
                <h4>{props.subtitle}</h4>
                <p>
                    {props.content}
                </p>
            </Modal.Body>
            <Modal.Footer style={{ backgroundColor: "#BFC5D2"}}>
                <Button onClick={handleClick}>Agendar</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default MyVerticallyCenteredModal;
