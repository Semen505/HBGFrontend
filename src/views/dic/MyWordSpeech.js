import React, { useState } from "react";
import { useSpeechSynthesis } from "react-speech-kit";
import { Button, Typography, Row, Col } from "antd";

const { Title } = Typography;

function MyWordSpeech() {
  var [value, setValue] = useState("");
  const [voiceIndex, setVoiceIndex] = useState(0);

  value = "handsome";
  const { speak, voices } = useSpeechSynthesis();
  const voice = voices[voiceIndex] || null;

  return (
    <div>
      <Row>
        <Col span={8} className={"text-align: left"}>
          <Title level={2} align="left">handsome</Title>
        </Col>
        <Col span={16} align="left">
          <Button type="primary" shape="circle" icon="audio" 
              size={"large"} onClick={() => { setVoiceIndex(3); speak({ text: value, voice });}} ></Button>
              &nbsp;&nbsp;&nbsp;
          <Button type="danger" shape="circle" icon="audio"
              size={"large"} onClick={() => { setVoiceIndex(2); speak({ text: value, voice });}} ></Button>
        </Col>
      </Row>
    </div>
  );
}

export default MyWordSpeech;