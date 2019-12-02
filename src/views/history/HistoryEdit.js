import React from 'react'
import { Input, Button } from 'antd'
import AudioRecorder from './AudioRecorder'
import { gMessage } from './global'
// import { runInThisContext } from 'vm';

const { TextArea } = Input;
//const siteUrl = 'http://192.168.1.112/ehb/index.php';

class HistoryEdit extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
              title: "",
              text: "",
              audio: null,
              historyId: this.props.historyId,
              buttonName: "Add History"
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.setAudio = this.setAudio.bind(this);
    }

    componentDidMount() {
      if (this.state.historyId > -1) {
        this.setState({
          title: "New York title",
          text: "It’s worth taking just one more minute to review what’s going on in that last piece of code. In componentWillReceiveProps we have our only opportunity to view new props as they are coming in and compare them with previous props.",
          buttonName: "Update History"
        })
      }
      /*
      fetch(siteUrl+'/websiterestcontroller/website?id=' + this.props.historyId)
        .then(response => {
          return response.json();
        }).then(result => {
          console.log(result);
          this.setState({
            id:result.id,
            title:result.title,
            url:result.url
          });
        });
        */
      }

    setAudio(data) {
      const state = this.state
      state['audio'] = data
      this.setState(state)
    }    

    handleChange(event) {
      const state = this.state
      state[event.target.name] = event.target.value      
      this.setState(state)
    }

    handleSubmit(event) {
      event.preventDefault();
      gMessage("success", "New history added successfully.");
      this.setState({
        title: "",
        text: "",
        audio: null
      })
      /*
      const state = this.state;
      fetch(siteUrl+'/historycontroller/add_history', {
        method: 'POST',
        body: JSON.stringify({
                title: state.title,
                text:  state.text,
                words: state.words,
                audio: state.audio
        }),
        headers: {
                "Content-type": "application/json; charset=UTF-8"
        }
      }).then(response => {
          if(response.status === 200) {
            this.props.historyAdded()
            alert("New history added successfully.");            
          }
        });
        */
    }

    render() {
        return (
          <div style={{padding:'5px'}}>
              <div>
                <h1 style={{ textAlign: 'center', color: '#25b864', fontWeight: 'bold'}}>The more you try, The more you advance!!</h1>
              </div>
              <div>
                <Button type="primary" onClick={ this.handleBack }>
                    Back to History
                </Button>
              </div>
              <div>
                <Input
                    placeholder="Your History's Title"
                    name="title"
                    onChange={this.handleChange}
                    value={this.state.title}
                    style={{opacity: '0.8', padding:'5px'}}
                    required
                />
              </div>
              <div>
                <TextArea
                    placeholder="Your History's Content"
                    name="text"
                    onChange={this.handleChange}
                    value={this.state.text}
                    style={{ minHeight:'300px',opacity: '0.8', padding:'5px', marginTop:'5px' }}
                    required
                />
              </div>
              <div>
                <AudioRecorder 
                    audio={ this.state.audio } 
                    setAudio={ this.setAudio } 
                    style={{opacity: '0.8', padding:'5px'}}
                  />
              </div>
              <div>
                <Button type="primary" htmlType="submit" onClick={ this.handleSubmit }>
                    { this.state.buttonName }
                </Button>
              </div>
          </div>
        )
    }
}

export default HistoryEdit