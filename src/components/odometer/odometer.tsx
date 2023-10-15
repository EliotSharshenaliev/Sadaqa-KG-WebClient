import React from 'react';
import 'odometer/themes/odometer-theme-minimal.css';

const ReactOdometer = React.lazy(() => import("react-odometerjs"))

const Odometer = () => {
    const [score, setScore] = React.useState(132535)


    React.useEffect(() => {
        const interval = setInterval(() => {
            setScore(score + 1);
        }, 1000);

        return () => clearInterval(interval);
    }, [score]);

    return (
        <div
            className="card border-0 d-flex justify-content-center align-items-md-center bg-transparent">
            <svg className="position-absolute z-0" viewBox="0 0 422 115" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
                <path d="M421.661 115H0L22.8671 57.9123L0 0.832764H421.661L404.289 57.9123L421.661 115Z"
                      fill="#426A6C"></path>
                <path
                    d="M403.288 104.866H18.3743L39.2487 57.9123L18.3743 10.97H403.288L387.43 57.9123L403.288 104.866Z"
                    stroke="white"></path>
            </svg>
            <ReactOdometer
                className={"counter-input text-white z-1"}
                value={score} format="(ddd),dd"
            />

        </div>
    );
};

export default Odometer;