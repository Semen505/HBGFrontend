/*  Written by Pooh, 2019-11-08 */

import React, { Component } from 'react';
import ModalForm from './ModalForm';
import { connect } from "react-redux";
import { updateIdiom, deleteIdiom } from "../../redux/actions/idiom";

function mapDispatchToProps(dispatch) {
    return {
      updateIdiom: idiom => dispatch(updateIdiom(idiom)),
      deleteIdiom: id => dispatch(deleteIdiom(id))
    };
}

class ConnectedIdiomDetail extends Component {
  deleteItem = id => {
    let confirmDelete = window.confirm('Delete idiom forever?')
    if(confirmDelete){
      this.props.deleteIdiom(id);
    }
  }

  handleClick = e => {
    e.preventDefault();
    const temp = {
            ...this.props.idiom,
            likeCount: this.props.idiom.likeCount + 1,
            isLike: 1,
            ownUserId: 1
        }
    this.props.updateIdiom(temp);
  }

  render() {
    return (
      <div>
        <div className='idiom-content'>Description</div>
        <p>{this.props.idiom.description}</p>
        <div className='idiom-content'>Example</div>
        <p>{this.props.idiom.example}</p>
        <button onClick={this.handleClick} className="btn btn-sm btn-outline-success pull-xs-right" style={{marginLeft:"10px"}}  disabled={this.props.idiom.likeCount === 0 ? false: true}>
            <i className="ion-heart"></i> 
            Like
        </button>
        <button onClick={() => this.deleteItem(this.props.idiom.id)} className="btn btn-sm btn-outline-danger pull-xs-right" style={{marginLeft:"10px"}}>
            <i className="ion-minus-circled"></i> 
            Del
        </button>
        {/* <Button color="danger" onClick={() => this.deleteItem(this.props.idiom.id)}>Del</Button> */}
        <ModalForm buttonLabel="Edit" idiom={this.props.idiom}/>
      </div>
    );
  }
}

const IdiomDetail = connect(null, mapDispatchToProps)(ConnectedIdiomDetail);

export default IdiomDetail;