import React from 'react';
import Vector2 from "../components/svg/vector2";
import Vector1 from "../components/svg/vector1";
import {Container, Row} from "react-bootstrap";
import Profile from "../components/profile/profile";
import Odometer from "../components/odometer/odometer";
import UsersTable from "../components/table/users-table";
import ProfileModal from "../components/profile_modal/modal";

const HomePage = () => {
    return (
        <>
            <Vector2/>
            <Vector1/>
            <Container className={"text-center"}>
                LOgin
            </Container>
            <ProfileModal/>
        </>
    );
};

export default HomePage;