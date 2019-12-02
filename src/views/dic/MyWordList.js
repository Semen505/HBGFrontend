/**
 * @author dolphin
 * @date 2019.11.1
 * @description Shows the list of whole word.
 */

import React from 'react';
import { Typography, Button, Row, Col, Input, Modal } from 'antd';
//import './App.css';
import List from 'react-list-select'

const { Title } = Typography;
const { Search } = Input;

const data = [
    'apple',
    'bag',
    'canada',
    'danger',
    'effort',
    'giraffe',
    'handsome',
    'intelligence',
    'joke',
    'keep',
    'lemon',
    'canada',
    'danger',
    'effort',
    'giraffe',
    'handsome',
    'intelligence',
    'joke',
    'keep',
    'lemon',
    'joke',
    'keep',
    'lemon',
    'canada',
    'danger',
    'effort',
    'giraffe',
    'handsome',
    'intelligencefffffffffff',
    'joke',
];

class MyWordList extends React.Component {

    state = {
        visible: false,
        selected: 0
    };

    showAddModal = () => {
        this.setState({
            visible: true,
        });
    };

    handleOk = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };

    handleCancel = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };

    render() {
        return (
            <div>
                <Row className="my-word-search-box">
                    <Search align="center" placeholder="input search word" onSearch={value => console.log(value)} enterButton />
                </Row>
                <Row>
                    <div className="my-word-list-box">
                        <List
                            align="left"
                            items={data}
                            selected={[0]}
                            border={2}
                            onChange={(selected) => { console.log(selected) }}
                        />
                    </div>
                </Row>
                <Row className="my-word-add-box">
                    <Col md={16}>
                        <Title level={3} align="right">245/52</Title>
                    </Col>
                    <Col md={8}>
                        &nbsp;
                        <Button type="primary" icon="plus" onClick={this.showAddModal}>
                            Add
                        </Button>
                    </Col>
                </Row>
                <Modal
                    title="Add my word"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
                    <Row>
                        <Col md={8}>
                            <p>Word:</p>
                        </Col>
                        <Col md={16}>
                            <Input></Input>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={8}>
                            <p>Images:</p>
                        </Col>
                        <Col md={16}>
                            <Button type="danger" icon="plus">
                            </Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={8}>
                            <p>Description:</p>
                        </Col>
                        <Col md={16}>
                            <textarea id="my-word-description"></textarea>
                        </Col>
                    </Row>
                </Modal>
            </div>
        )
    }
}

export default MyWordList;
