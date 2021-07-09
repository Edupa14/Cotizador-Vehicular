import React from 'react';
import {Col, Container, Image, Row} from "react-bootstrap";
import './BodyArmaTuPlan.css';
import TimeLines from "../../TimeLines/TimeLines";
import back from '../../../assets/images/back.svg'
import {useHistory} from "react-router-dom";
import check from "../../../assets/images/check.svg";
import person from "../../../assets/images/person.svg";
import {Button} from "antd";
import {Card} from 'antd';
import InputArrows from "../InputArrows/InputArrows";
import Tab from "../Tab/Tab";

const BodyArmaTuPlan = () => {

    const history = useHistory();
    return (
        <>
            <Container fluid >
                <Row>
                    <Col md={3}>
                        <Row className="homeArmaTuplan__left">
                            <Col md={{span: 6, offset: 3}} className="mt-5">
                                <TimeLines></TimeLines>
                            </Col>
                        </Row>
                    </Col>
                    <Col md={6} className="mb-5">
                        <Row className="">
                            <Col md={{span: 8, offset: 2}} className="pt-4">
                                <p className="homeArmaTuplan__pregunta--estilo m-0">
                                    <a onClick={() => history.push('/')} className="homeArmaTuplan__right--estilo">
                                        <Image height={24} src={back}></Image>
                                        <span className="homeArmaTuplan_volver"> VOLVER</span>
                                    </a>
                                </p>
                                <p className="home__right--text__principal mb-0 mt-3">¡Hola, <span
                                    className="home__right--textspan">Juan!</span></p>
                                <p className="home__texto--subtitulo">Conoce las coberturas para tu plan</p>
                                <Card style={{border: "3px solid #F0F2FA", borderRadius: "12px", width: "80%"}}>
                                    <Row>
                                        <Col md={7}>
                                            <p className="home__right--card home__texto--placa mb-0">Placa: C2U-114</p>
                                            <p className="home__right--card home__texto--modelo mb-0">Wolkswagen 2019
                                                Golf</p>
                                        </Col>
                                        <Col className="text-right home__right--image">
                                            <Image src={person}></Image>
                                        </Col>
                                    </Row>
                                </Card>
                                <Row className="mt-2">
                                    <Col md={6}>
                                        <p className="home__right--sumatitle mb-0">Indica la suma asegurada</p>
                                        <Row>
                                            <Col md={5} className="home__right--monto" style={{borderRight: "1px solid"}}>
                                                MIN $12,500
                                            </Col>
                                            <Col md={5} className="home__right--monto">
                                                MAX $16,500
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col md={6} className="pt-2">
                                        <InputArrows/>
                                    </Col>
                                </Row>
                                <hr/>
                                <p className="home__texto--modelo">Agrega o quita coberturas</p>
                                <Tab/>
                            </Col>
                        </Row>
                    </Col>
                    <Col md={3}>
                        <Row className="homeArmaTuplan__left">
                            <Col style={{marginTop: 253}}>
                                <p className="homeArmaTuplan__right--estilosubt mb-0">Monto</p>
                                <p className="homeArmaTuplan__right--estilomonto  mb-0">$35.00</p>
                                <p className="homeArmaTuplan__right--estilosubtmonto">mensuales</p>
                                <hr/>
                                <p className="home__right--sumatitle m-0">El precio incluye:</p>
                                <p className="homeArmaTuplan__pregunta--estilo m-0">
                                    <Image height={24} src={check}></Image>
                                    <span className="home__right--lista"> Llanta de respuesto</span>
                                </p>
                                <p className="homeArmaTuplan__pregunta--estilo m-0">
                                    <Image height={24} src={check}></Image>
                                    <span className="home__right--lista"> Analisis de motor</span>
                                </p>
                                <p className="homeArmaTuplan__pregunta--estilo m-0">
                                    <Image height={24} src={check}></Image>
                                    <span className="home__right--lista"> Aros gratis</span>
                                </p>
                                <Button onClick={() => history.push('/gracias')} type="danger" shape="round"
                                        size={56} className="home__button mt-2">
                                    LO QUIERO
                                </Button>
                            </Col>
                        </Row>
                    </Col>
                </Row>

            </Container>
        </>
    )

}

export default BodyArmaTuPlan;