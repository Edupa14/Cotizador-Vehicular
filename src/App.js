import React from 'react';
import {Col, Container, Row} from "react-bootstrap";

const App = () => {
    return (
        <>
            <Container>
                <Row>
                    <Col xs={6}>Hola mundo</Col>
                    <Col xs={6}>Hola mundo</Col>
                </Row>
            </Container>
        </>
    )
}

export default App;