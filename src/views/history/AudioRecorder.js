import React from 'react'
import MicRecorder from 'mic-recorder-to-mp3'
import { Button, Icon, Tooltip } from 'antd'

const mp3Recorder = new MicRecorder({ bitRate: 128 });

class AudioRecorder extends React.Component {
		
	constructor(props) {
		super(props);
		
		this.state = {
		  isRecording: false,
		  blobURL: '',
		  isBlocked: false
		}
		this.start = this.start.bind(this);
		this.stop = this.stop.bind(this);
	}
	componentDidMount() {
		navigator.getUserMedia({ audio: true },
		  () => {
		    console.log('Permission Granted');
		    this.setState({ isBlocked: false });
		  },
		  () => {
		    console.log('Permission Denied');
		    this.setState({ isBlocked: true })
		  },
		);
	}
	start = () => {
	  if (this.state.isBlocked) {
	    console.log('Permission Denied');
	  } else {
	    mp3Recorder
	      .start()
	      .then(() => {
	        this.setState({ isRecording: true });
	      }).catch((e) => console.error(e));
	  }
	}
	stop = () => {
	  mp3Recorder
	    .stop()
	    .getMp3()
	    .then(([buffer, blob]) => {
	      const blobURL = URL.createObjectURL(blob)
          console.log(blobURL)
          this.setState({ blobURL, isRecording: false, audio: blob });
          this.props.setAudio(blob)
	    }).catch((e) => console.log(e));
	}
	render() {
		let blobURL
		if (this.state.audio != null)
			blobURL = URL.createObjectURL(this.state.audio)
		return (			
			<div style={{margin: '5px'}} >
				<div>
					<audio src={blobURL} controls="controls" style={{width: '80%'}} />
				</div>
				<div>
				<Tooltip placement="bottom" title="Start recording your voice." arrowPointAtCenter>
				<Button type="primary" onClick={this.start} disabled={this.state.isRecording}>
				<Icon type="audio" theme="filled" />
				</Button>
				</Tooltip>
				<Tooltip placement="bottom" title="Stop recording." arrowPointAtCenter>
				<Button type="primary" onClick={this.stop} disabled={!this.state.isRecording} style={{marginLeft: '5px'}} >
				<Icon type="stop" theme="filled" />
				</Button>
				</Tooltip>
				</div>
			</div>
		)
	}
}

export default AudioRecorder