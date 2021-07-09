import React from 'react';
import {Col, Container, Image, Row} from "react-bootstrap";
import "./BodyHome.css";
import car from "../../../assets/images/Home/car.svg";
import InputDoc from '../../Input/InputDoc'
import {AutoComplete, Button} from "antd";
import {Checkbox} from 'antd';
import { useHistory } from 'react-router-dom';

const BodyHome = () => {


    const history = useHistory();

    function onChange(e) {
        console.log(`checked = ${e.target.checked}`);
    }


    return (
        <>
            <Container fluid className="home__left--position">
                <Row>
                    <Col md={5} className="home__left">
                        <Row className="home__left--top">
                            <Col md={{span: 6, offset: 3}} className="text-center pt-5">
                                <Image src={car}></Image>
                            </Col>
                            <Col md={12}>
                                <Row>
                                    <Col md={{span: 6, offset: 3}}>
                                        <p className="home__left--text__top mb-0">¡NUEVO!</p>
                                        <p className="home__left--text__principal  mb-0">Seguro <span
                                            className="home__left--textspan">Vehicular<br/>Tracking</span>
                                        </p>
                                        <p className="home__left--text__bottom">Cuentanos donde le haras seguimiento a
                                            tu seguro</p>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md="8" className="home__left--footer pb-4">
                                        <p>© 2021 RIMAC Seguros y Reaseguros.</p>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                    <Col md={7}>
                        <Row className="home__left--top">
                            <Col md={{span: 6, offset: 3}} className="">
                                <p className="home__right--title">Déjanos tus datos</p>
                                <InputDoc/>

                                <div className="site-input-group-wrapper mt-4">

                                    <AutoComplete className="inputdoc--border__right" size="large"
                                                  style={{width: '70%'}}
                                                  placeholder="Celular"
                                                  options={[{value: 'text 1'}, {value: 'text 2'}]}
                                    />
                                </div>

                                <div className="site-input-group-wrapper mt-4">

                                    <AutoComplete className="inputdoc--border__right" size="large"
                                                  style={{width: '70%'}}
                                                  placeholder="Placa"
                                                  options={[{value: 'text 1'}, {value: 'text 2'}]}
                                    />
                                </div>
                                <div className="mt-4" style={{width: '70%'}}>
                                    <Checkbox className="home__checkbox" onChange={onChange}>Acepto la <span
                                        className="home__checkbox--span">Política de Protecciòn de Datos Personales</span> y
                                        los <span
                                            className="home__checkbox--span">Términos y Condiciones.</span></Checkbox>
                                </div>
                                <div className="mt-4">
                                    <Button onClick={() => history.push('/arma-tu-plan')}type="danger" shape="round"
                                            size={56} className="home__button">
                                        COTÍZALO
                                    </Button>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default BodyHome;
