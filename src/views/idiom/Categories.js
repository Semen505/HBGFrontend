/*  Written by Pooh, 2019-11-08 */

import React from 'react';
import { Tab, Row, ListGroup } from 'react-bootstrap';
import { connect } from "react-redux";
import { changeCategory } from "../../redux/actions/idiom";

const mapStateToProps = state => ({
  classifyList: state.idiom.classifyList,
});

const mapDispatchToProps = dispatch => ({
  changeCategory: data => dispatch(changeCategory(data))
});


class ConnectedCategories extends React.Component {
  constructor(props) {
      super(props)
      this.state = {
        _classifyList: this.props.classifyList
      } 
  }

  componentWillReceiveProps(nextProps) {
    if (this.state._classifyList.length !== nextProps.classifyList.length) {
      this.setState({
        _classifyList: nextProps.classifyList
      })
    }
  }

  onChange = id => {
    this.props.changeCategory(id);
  }

  render() {
    const data = this.state._classifyList;//this.props.classifyList;
    if (data !== undefined && data.length !== 0) {
      return (
        <Tab.Container id="list-group-tabs-example" defaultActiveKey={ '#' + data[0].name}>
          <Row>
            <ListGroup style={{marginTop:"20px"}}>
              { 
                data.map((tag) =>
                  <ListGroup.Item action key={tag.id} href={'#' + tag.name} className = 'btn btn-success' onClick={() => {this.onChange(tag.id)}}>
                    {tag.name}
                  </ListGroup.Item>
                )
              }
            </ListGroup>
          </Row>
      </Tab.Container>
      );
    } else {
      return (
        <div>Loading Categories...</div>
      );
    }
  }
}

const Categories = connect(mapStateToProps, mapDispatchToProps)(ConnectedCategories);

export default Categories;
