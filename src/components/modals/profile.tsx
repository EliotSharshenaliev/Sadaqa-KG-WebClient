import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React from "react";
import AuthService from "../../service/auth"
import {EscapeEvent} from "../keyboard_events/EscapeEvent";

interface ProfileModalProps {
    show: boolean,
    onToggle: () => void
}

function ProfileModal({show, onToggle}: ProfileModalProps) {

    React.useEffect(() => {
        const fetchOption = async () => {
            const options = await AuthService.getOptionUpdate()
            console.log(options)
        }

        fetchOption();
    }, [])


    return (
        <EscapeEvent state={show} onEvent={onToggle}>

            <Modal show={show}
                   aria-labelledby="contained-modal-title-vcenter"
                   centered
            >
                <Modal.Header className={"border-0"}>
                    <Button
                        type={"button"}
                        className={"btn-close"}
                        aria-label={"Close"}
                        onClick={onToggle}
                    >
                    </Button>
                </Modal.Header>

                <Modal.Body>

                </Modal.Body>

                <Modal.Footer className={"justify-content-center"}>
                    <Button variant="success" className={"btn-block w-100"}>Сохранить настройки</Button>
                </Modal.Footer>
            </Modal>
        </EscapeEvent>
    )
        ;
}

export default ProfileModal;