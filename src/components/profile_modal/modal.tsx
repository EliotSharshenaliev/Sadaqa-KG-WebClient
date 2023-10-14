import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React from "react";
import {useSettings} from "../../context/profile_modal";
import {Form} from "react-bootstrap";
import FormFile from "react-bootstrap/esm/FormFile";

function ProfileModal() {
    const {profileModalVisible, handleProfileModal} = useSettings()

    return (
        <Modal show={profileModalVisible}
               aria-labelledby="contained-modal-title-vcenter"
               centered
        >
            <Modal.Header className={"border-0"}>
                <Button
                    type={"button"}
                    className={"btn-close"}
                    aria-label={"Close"}
                    onClick={handleProfileModal}
                >
                </Button>
            </Modal.Header>

            <Modal.Header
                className={"flex-column  justify-content-center align-items-md-center"}>
                <div
                    className="mt-3 mb-4 position-relative">
                    <img
                        src="none"
                        className="rounded-circle img-fluid"
                        style={{width: "100px"}}/>
                    <div
                        className="position-absolute z-2"
                        style={{bottom: "-25px", right: "-25px", fontSize: "50px", color: "#7FD9D5"}}>
                        +
                    </div>

                </div>
                <h4 className="mb-1" contentEditable="true"></h4>
                <div className="mb-2" contentEditable="true">@shrshn_alyev</div>
            </Modal.Header>

            <Modal.Body>

            </Modal.Body>

            <Modal.Footer className={"justify-content-center"}>
                <Button variant="success" className={"btn-block w-100"}>Сохранить настройки</Button>
            </Modal.Footer>
        </Modal>
    )
        ;
}

export default ProfileModal;