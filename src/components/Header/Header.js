import React from 'react';
import {Col, Container, Image, Row} from "react-bootstrap";
import logo from '../../assets/images/Home/logo_rimac.svg';
import phone from '../../assets/images/Home/phone.png'
import './Header.css'

const Header = (props) => {
    const color = props.background ? props.background : '';
    const border = props.background ? '1px solid #E4E8F7' : '';
    return (
        <>
            <Container className="header--position" fluid style={{ background: color, borderBottom: border}}>
                <Row className="align-items-center header--altura">
                    <Col md={4}>
                        <Image height={16} src={logo}></Image>
                    </Col>
                    <Col md={{span: 4, offset: 4}} className="text-right">
                        <p className="header__pregunta--estilo m-0">
                            ¿Tienes alguna duda?
                            <a href="tel:+014116001" className="header__telefono--estilo">
                                <Image src={phone}></Image>
                                (01) 411 6001
                            </a>
                        </p>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Header;