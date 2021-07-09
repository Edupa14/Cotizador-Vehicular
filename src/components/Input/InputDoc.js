import React from "react";
import {Input, Row, Select, InputNumber, AutoComplete, Cascader} from 'antd';
import './InputDoc.css'


const InputDoc = () => {

    const {Option} = Select;

    return (
        <>
            <div className="site-input-group-wrapper">
                <Input.Group>
                    <Select className="inputdoc--border__left" size="large" defaultValue="DNI" style={{width: '20%'}}>
                        <Option value="DNI">DNI</Option>
                        <Option value="RUC">RUC</Option>
                    </Select>
                    <AutoComplete className="inputdoc--border__right" size="large"
                                  style={{width: '50%'}}
                                  placeholder="N° de documento"
                                  options={[{value: 'text 1'}, {value: 'text 2'}]}
                    />
                </Input.Group>

            </div>
        </>
    )
}

export default InputDoc;