/**
 * @author dolphin
 * @date 2019.11.1
 * @description Shows a description of a specific word.
 */

import React from 'react';
import { Layout, Row} from 'antd';
//import '../../App.css';
import './dic.css';
import MyWordSpeech from "./MyWordSpeech"
import MyWordImage from "./MyWordImage"

// const { Header, Content, Footer } = Layout;
const { Content} = Layout;
// const { Title } = Typography;

class MyWordDetail extends React.Component {
    render() {
        return (
            <div className="MyWordDetail">
                <Row>
                    <MyWordSpeech></MyWordSpeech>
                </Row>
                <Row>
                    <MyWordImage style="width:240px; height:160px"></MyWordImage>
                </Row>
                <Row>
                    <Content align="left" 
                        style={{
                            background: '#fff',
                            padding: 24,
                            margin: 0,
                            minHeight: 280,
                        }}
                    >
                        1 (of a man) good-looking.<br/><br/>
                            The other bloke was handsome , tall, drink in hand and lazily people watching as I had been.<br/>
                            Synonyms:<br/>
                            good-looking, attractive, striking, gorgeous, hunky, drop-dead, gorgeous, hot, cute<br/><br/>
                        2 (of a number, sum of money, or margin) substantial.<br/><br/>
                            Congratulations to those involved with the venture as a very handsome sum of money was raised and overall it was a great night, enjoyed by all present.<br/>
                            Synonyms:<br/>
                            substantial, considerable, sizable, princely, large, big, ample, bumper, tidy, whopping, not to be sneezed at, ginormous
                    </Content>
                </Row>
            </div>
        )
    }
}

export default MyWordDetail;
