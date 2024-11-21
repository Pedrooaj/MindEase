import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

// Tipagem das props do modal
interface MyVerticallyCenteredModalProps {
    show: boolean;
    onHide: () => void;
    title: string;
    subtitle: string;
    content: React.ReactNode;
}

const MyVerticallyCenteredModal: React.FC<MyVerticallyCenteredModalProps> = (props) => {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {props.title}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>{props.subtitle}</h4>
                <p>
                    {props.content}
                </p>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Agendar</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default MyVerticallyCenteredModal;
