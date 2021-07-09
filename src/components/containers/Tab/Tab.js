import React, {useState} from "react";
import {Tabs} from 'antd';

import {Collapse} from 'antd';
import {Button, Tooltip} from 'antd';
import {PlusOutlined, MinusOutlined} from '@ant-design/icons';
import './Tab.css'

const {Panel} = Collapse;

const {TabPane} = Tabs;

const Tab = () => {
        const [llantaRobada, setllantaRobada] = useState(false)
        const [choque, setChoque] = useState(false)
        const [atropello, setAtropello] = useState(false)

        const handlerLlanta = (bool) => {
            console.log(llantaRobada)
            setllantaRobada(bool)
        }
        const handlerChoque = () => {
            setChoque(!choque)
        }

        const HandlerAtropello = () => {
            setAtropello(!atropello)
        }
        return (
            <>
                <Tabs defaultActiveKey="1">
                    <TabPane tab="PROTEGE A TU AUTO" key="1" size="small">
                        <Collapse defaultActiveKey={['1']} ghost expandIconPosition="right">
                            <Panel className="home__texto--modelo" header="Llanta robada" key="1">

                                <Button onclick={() => {
                                    handlerLlanta(false)
                                }} type="primary" type="solid" shape="circle" style={{}} icon={<MinusOutlined/>}/>
                                <Button onclick={() => {
                                    handlerLlanta(false)
                                }} type="link">QUITAR</Button>
                                <Button onclick={() => {
                                    handlerLlanta(true)
                                }} type="primary" type="solid" shape="circle" style={{svg: 'baseline!important'}}
                                        icon={<PlusOutlined/>}/>
                                <Button onclick={() => {
                                    handlerLlanta(true)
                                }} type="link">AGREGAR</Button>
                                <p className="home__right--lista mt-4">
                                    He salido de casa a las cuatro menos cinco para ir a la academia de ingles de mi pueblo (Sant Cugat, al lado de Barcelona) con mi bici, na llego a la academia que está en el centro del pueblo en una plaza medio-grande y dejo donde siempre la bici atada con una pitón a un sitio de esos de poner las bicis
                                    y mucho más
                                </p>
                            </Panel>
                            <Panel className="home__texto--modelo" header="Choque y/o pasarte la luz roja " key="2">
                                <Button onclick={() => {
                                    handlerChoque(false)
                                }} type="primary" type="solid" shape="circle" style={{}} icon={<MinusOutlined/>}/>
                                <Button onclick={() => {
                                    handlerChoque(false)
                                }} type="link">QUITAR</Button>
                                <Button onclick={() => {
                                    handlerChoque(true)
                                }} type="primary" type="solid" shape="circle" style={{svg: 'baseline!important'}}
                                        icon={<PlusOutlined/>}/>
                                <Button onclick={() => {
                                    handlerChoque(true)
                                }} type="link">AGREGAR</Button>
                            </Panel>
                            <Panel className="home__texto--modelo" header="Atropello en la vía Evitamiento " key="3">
                                <Button onclick={() => {
                                    HandlerAtropello(false)
                                }} type="primary" type="solid" shape="circle" style={{}} icon={<MinusOutlined/>}/>
                                <Button onclick={() => {
                                    HandlerAtropello(false)
                                }} type="link">QUITAR</Button>
                                <Button onclick={() => {
                                    HandlerAtropello(true)
                                }} type="primary" type="solid" shape="circle" style={{svg: 'baseline!important'}}
                                        icon={<PlusOutlined/>}/>
                                <Button onclick={() => {
                                    HandlerAtropello(true)
                                }} type="link">AGREGAR</Button>
                            </Panel>
                        </Collapse>
                    </TabPane>
                    <TabPane tab="PROTEGE A LOS QUE TE RODEAN" key="2" size="small">
                    </TabPane>
                    <TabPane tab="MEJORA TU PlAN" key="3" size="small">
                    </TabPane>
                </Tabs>
            </>
        )
    }
;

export default Tab;