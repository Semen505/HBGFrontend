import React, { Component } from 'react'
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap'
import CategoryEditForm from './CategoryEditForm.js'

class CategoryModalForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      modal: false
    }
  }

  toggle = () => {
    this.setState(prevState => ({
      modal: !prevState.modal
    }))
  }

  render() {
    const closeBtn = <button className="close" onClick={this.toggle}>&times;</button>

    const label = this.props.buttonLabel

    let button = ''
    let title = ''

    if(label === 'Edit'){
      button = <Button
                color="warning"
                onClick={this.toggle}
                style={{float: "left", marginRight:"10px"}}>{label}
              </Button>
      title = 'Edit Item'
    }
    else if(label === 'Add')
    {
      button = <Button
                color="success"
                onClick={this.toggle}
                className = "btn btn-success pull-xs-right modal-button"
                style={{float: "left", marginRight:"10px"}}>{label}
              </Button>
      title = 'Add'
    }

    return (
      <div>
        {button}
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className} style={{height:"200px"}}>
        {/* <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className} className="modal-add-category"> */}
          <ModalHeader toggle={this.toggle} close={closeBtn}>{title}</ModalHeader>
          <ModalBody>
            <CategoryEditForm
              addItemToState={this.props.addItemToState}
              updateState={this.props.updateState}
              toggle={this.toggle}
              item={this.props.item} />
          </ModalBody>
        </Modal>
      </div>
    )
  }
}

export default CategoryModalForm;