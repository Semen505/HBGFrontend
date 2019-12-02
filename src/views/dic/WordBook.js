/**
 * @author dolphin
 * @date 2019.11.1
 * @description This is word book page in my english history.
 */

import React from 'react';
import { Row, Col } from 'antd';
//import './App.css';
import './dic.css';
import MyWordList from "./MyWordList"
import MyWordDetail from "./MyWordDetail"


class WordBook extends React.Component {
    render() {
        return (
            <div className="WordBook">
                <Row className="my-dic-title">
                    <div id="wrapper-header">
                        <div id="header">
                            <a href="/"><img src="/banner.jpg" alt="logo"/></a>
                        </div>
                    </div>
                </Row>

                <Row className="my-word-book" style={{padding: 24}}>
                    <Col className="my-word-list-panel" span={6}>
                        <MyWordList></MyWordList>
                    </Col>
                    <Col className="my-word-detail-panel" span={18}>
                        <MyWordDetail></MyWordDetail>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default WordBook;
