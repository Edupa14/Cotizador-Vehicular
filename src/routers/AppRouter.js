import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Home from "../views/Home/Home";
import ArmaTuPlan from "../views/ArmaTuPlan/ArmaTuPlan";
import Gracias from "../views/Gracias/Gracias";

const AppRouter = () => {
    return (
        <>
            <Router>
                <div>
                    <Switch>
                        <Route exact path="/">
                            <Home/>
                        </Route>
                        <Route exact path="/arma-tu-plan">
                            <ArmaTuPlan/>
                        </Route>
                        <Route exact path="/gracias">
                            <Gracias/>
                        </Route>
                    </Switch>
                </div>
            </Router>
        </>
    )
}

export default AppRouter;