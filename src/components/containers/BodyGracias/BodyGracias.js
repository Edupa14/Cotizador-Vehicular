import React from 'react';
import {Col, Container, Image, Row} from "react-bootstrap";
import home from '../../../assets/images/person_gracais.svg'
import {Button} from "antd";
import './BodyGracias.css'

const BodyGracias = () => {

    return (
        <>
            <Container fluid className="home__left--position">
                <Row>
                    <Col md={4} className="homeArmaTuplan__left"  style={{ display: "flex",alignItems: "center"}}>
                        <Image src={home} style={{ marginLeft:"178px"}}></Image>
                    </Col>
                    <Col md={{span: 6, offset: 1}} className="pt-4 text-left" style={{marginTop:"120px"}}>
                        <Row>
                            <Col  md={{span: 8, offset: 1}} className="pt-4 pl-4">

                                <p className=" gracias__titulo mb-0">
                                    ¡Te damos la bienvenida!
                                </p>
                                <p className="gracias__titulooscuro mb-0">
                                    Cuenta con nosotros para<br/> proteger tu vehículo
                                </p>
                                <p className="gracias__texto">
                                    Enviaremos la confirmación de compra de tu Plan Vehícular Tracking a tu correo:<br/>
                                    <span className="gracias__texto--span">joel.sanchez@gmail.com</span>
                                </p>

                                <Button type="danger" shape="round"
                                        size={56} className="home__button mt-2">
                                    CÓMO USAR MI SEGURO
                                </Button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default BodyGracias;