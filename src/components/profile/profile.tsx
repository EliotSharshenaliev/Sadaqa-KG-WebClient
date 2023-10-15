import React from 'react';
import Button from "react-bootstrap/Button";
import {Card, Row} from "react-bootstrap";
import {DeleteConfirmationModal} from "../modals/delete-account";
import {useAuth} from "../../context/auth_context";
import {getRegisteredDays} from "../../utils/calculate_days";

const Profile = ({onToggle}: {onToggle: () => void}) => {
    const [showDeleteConfirmation, setShowDeleteConfirmation] = React.useState(false);
    const {user} = useAuth()

    return (
        <Card style={{border: "none"}}>
            <Card.Body>
                <div className="mt-3 mb-4">
                    <img src={user?.picture_url}
                         className="rounded-circle img-fluid" style={{width: "100px"}} alt={"img"}/>
                </div>
                <Card.Title>{user?.firstname + " " + user?.lastname}</Card.Title>
                <Card.Text>
                    @{user?.username}
                </Card.Text>

                <Row
                    className={"justify-content-center"}
                    lg={{cols: 2}}
                    md={{cols: 2}}
                    sm={{cols: 2}}
                    xl={{cols: 2}}
                    xxl={{cols: 2}}

                >
                    <Row
                        className={"gap-1"}
                    >
                        <Button
                            type={"button"}
                            variant="success"
                            onClick={onToggle}>
                            Настройки
                        </Button>
                        <Button
                            type={"button"}
                            variant="outline-danger"
                            onClick={() => setShowDeleteConfirmation(true)}>
                            Удалить аккаунт
                        </Button>
                    </Row>
                </Row>

                <div
                    className="d-xxl-flex d-xl-flex d-lg-flex d-md-flex d-sm-flex  justify-content-between text-center mt-5 mb-2">
                    <div className="mb-2 mb-md-0">
                        <p className="mb-2 h5 ">{getRegisteredDays(user?.created_at)}</p>
                        <p className="text-muted mb-0 text-center ">В платформе</p>
                    </div>
                    <div className="px-3 mb-2 mb-md-0">
                        <p className="mb-2 h5">3</p>
                        <p className="text-muted mb-0 text-center text-white">Транзакции</p>
                    </div>
                    <div>
                        <p className="mb-2 h5">12425 som</p>
                        <p className="text-muted mb-0 text-center text-white">Пожертвовано</p>
                    </div>
                </div>
            </Card.Body>
            <DeleteConfirmationModal
                show={showDeleteConfirmation}
                onClose={() => setShowDeleteConfirmation(false)}
            />
        </Card>
    );
};

export default Profile;