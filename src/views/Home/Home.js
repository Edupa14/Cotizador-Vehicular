import React from 'react';
import Header from "../../components/Header/Header";
import Body from "../../components/containers/BodyHome/BodyHome";
import ArmaTuPlan from "../ArmaTuPlan/ArmaTuPlan";

import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

const Home = () => {
    return (
        <>
            <Header />
            <Body />
        </>
    )
}

export default Home;