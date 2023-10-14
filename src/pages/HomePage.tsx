import React from 'react';
import Vector2 from "../components/svg/vector2";
import Vector1 from "../components/svg/vector1";
import {Container, Row} from "react-bootstrap";
import Profile from "../components/profile/profile";
import Odometer from "../components/odometer/odometer";
import UsersTable from "../components/table/users-table";
import ProfileModal from "../components/profile_modal/modal";
import {useParams} from "react-router-dom";

const HomePage = () => {
    const params = useParams()
    console.log(params)
    return (
        <>
            <Vector2/>
            <Vector1/>
            <Container className={"text-center"}>
                <Row className={"d-flex justify-content-center align-items-center h-100 mt-5"}>
                    <div id="profileContainer" className="col col-md-9 col-lg-7 col-xl-5">
                        <Profile/>
                    </div>
                </Row>

                <Row className="d-sm-flex mt-5 justify-content-center">
                    <div className="col-md-9 col-lg-7 col-xl-6 col-sm-9 col ">
                        <Odometer/>
                    </div>
                </Row>

                <Row className="d-sm-flex justify-content-center align-items-center h-100 mt-5">
                    <div className="col col-md-9 col-lg-7 col-xl-5 ">
                        <UsersTable/>
                    </div>
                </Row>
            </Container>
            <ProfileModal/>
        </>
    );
};

export default HomePage;