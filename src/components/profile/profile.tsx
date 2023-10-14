import React from 'react';
import Button from "react-bootstrap/Button";
import {useSettings} from "../../context/profile_modal";
import {Card, Col, Row} from "react-bootstrap";

const Profile = () => {
    const {handleProfileModal} = useSettings()
    return (
        <Card style={{border:"none"}}>
            <Card.Body>
                <div className="mt-3 mb-4">
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava2-bg.webp"
                         className="rounded-circle img-fluid" style={{width: "100px"}} alt={"img"}/>
                </div>
                <Card.Title>Marat Sharshenaliev</Card.Title>
                <Card.Text>
                    @shrshn_alyev
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
                            onClick={handleProfileModal}>
                            Настройка подписки
                        </Button>
                        <Button
                            type={"button"}
                            variant="outline-danger"
                            onClick={handleProfileModal}>
                            Удалить аккаунт
                        </Button>
                    </Row>
                </Row>

                <div
                    className="d-xxl-flex d-xl-flex d-lg-flex d-md-flex d-sm-flex  justify-content-between text-center mt-5 mb-2">
                    <div className="mb-2 mb-md-0">
                        <p className="mb-2 h5 ">13 day</p>
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
        </Card>
    );
};

export default Profile;