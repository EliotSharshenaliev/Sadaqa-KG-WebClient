import React from 'react';
import {Spinner} from "react-bootstrap";

const LoadingPage = () => {
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
            }}
        >
            <Spinner animation="border" variant="danger" />
        </div>
    );
};

export default LoadingPage;