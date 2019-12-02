import React from 'react'
import { Table, Button, Input, Select, Row, Col, Icon} from 'antd'
import HistoryEdit from './HistoryEdit';

const { Search } = Input;
const { Option } = Select;

const siteUrl = 'http://192.168.1.105:3808/api/v1';

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
let years = [];

class HistoryList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedYear: new Date().getFullYear(),
      selectedMon: new Date().getMonth(),
      searchText: '',
      historyData: [],
      addHistory: 0,
      historyId: -1
    }
    for (let i = 2019; i < 2050; i ++) {
      years[i-2019] = i;
    }

    this.onAddHistory = this.onAddHistory.bind(this)
    this.onHistoryEdit = this.onHistoryEdit.bind(this)
  }

  componentDidMount() {
    this.getHistory(this.state.selectedYear, this.state.selectedMon,this.state.searchText);
  }

  componentWillReceiveProps(props) {
    if (props.addHistory === 0) {
      this.setState({
        addHistory: 0,
        historyId: -1
      })
    }
  }

  getHistory(selectedYear, selectedMon, searchText){
    let subUrl = '';
    (selectedMon + 1 > 9)?
      subUrl= '/history/gethistory?userId=3&createddate=' + selectedYear + '-' + (selectedMon + 1) + '&searchtext=' + searchText
      :subUrl= '/history/gethistory?userId=3&createddate=' + selectedYear + '-0' + (selectedMon + 1)+ '&searchtext=' + searchText;
    fetch(siteUrl + subUrl)
      .then(response => {
        return response.json()
      }).then(result => {
        this.setState({
          historyData:result.data
        })
      });  
  }

  columns () {
    return [
      {
        title: 'Topic about Text',
        dataIndex: 'title',
        render: text => <a>{text}</a>,
      },
    	{
        title: 'Create Time',
        dataIndex: 'createdAt',
      },
    ];
  }

  history(){
    return this.state.historyData;
  }

  getIndex(arr, value){
    for(var i = 0; i < 12; i++) {
      if(arr[i] ===  value) {
          return i;
      }
    }
  }

  onHistoryEdit(id){
    this.setState({
      addHistory: 1,
      historyId: id
    })
  }

  onAddHistory(){
    this.setState({
      addHistory: 1,
      historyId: -1
    })
  }

  render() {
    if (this.state.addHistory === 1) {
      return (
        <HistoryEdit historyId={ this.state.historyId }/>
      )
    } else {
      return (
        <div>
          <Row>
            <Col>
              <Search placeholder="input search text..."
                onSearch={value => {
                  this.setState({searchText: value});
                  this.getHistory(this.state.selectedYear, this.state.selectedMon, value)
                }} enterButton /> 
            </Col>
            <br></br>
            <Col style={{float:"right"}}>
              <Select defaultValue={new Date().getFullYear()} style={{ width: 120 }} 
                onChange={ (value) => {
                  this.setState({selectedYear:value}); 
                  this.getHistory(value, this.state.selectedMon,this.state.searchText);
                  }}
              >
                {
                  years.map(function(item, i) {
                    return (
                      <Option value={years[i]} key={i} >{years[i]}</Option>
                    )
                  })
                }                
              </Select>
              <Select defaultValue={months[new Date().getMonth()]} style={{ width: 120 }}
                onChange={ (value) => {
                  this.setState({selectedMon:this.getIndex(months, value)});
                  this.getHistory(this.state.selectedYear, this.getIndex(months, value), this.state.searchText);
                  }}
              >
                {
                  months.map(function(item, i) {
                    return (
                      <Option value={months[i]} key={i}>{months[i]}</Option>
                    )
                  })
                }                
              </Select>
              <Button type="primary" onClick={ this.onAddHistory }>
                + History
              </Button>
            </Col>
          </Row>
          <br/>
          <Table  
            dataSource={this.history()} 
            columns={this.columns()}
            rowKey='id'
            expandableRowIcon={<Icon type="right" />}
            onRow={
              (record, rowIndex) => {
                return {
                  onClick: event => { this.onHistoryEdit(record, rowIndex) },
                }
              }
            }
          /> 
        </div>
      )
    }
  }
}

export default HistoryList