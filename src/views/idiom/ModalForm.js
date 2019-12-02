/*  Written by Pooh, 2019-11-08 */

import React, { Component } from 'react';
import { Button, Modal } from 'react-bootstrap';
import AddEditForm from './AddEditForm';
import {Search} from 'react-bootstrap-table2-toolkit';
const { SearchBar } = Search;
class ModalForm extends Component {
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
        const label = this.props.buttonLabel;
        let button = '';
        let title = '';
        let search = '';

        if(label === 'Edit'){
            button = <button onClick={this.toggle} className="btn btn-sm btn-outline-success pull-xs-right" style={{marginLeft:"10px"}}>
                        <i className="ion-edit"></i> 
                        Edit
                    </button>;
            title = 'Edit Idiom';
        } else {
            button = <Button
                        onClick={this.toggle}
                        className = "btn btn-success pull-xs-right">{label}
                    </Button>;
            title = 'Add New Idiom'
        }

        if (this.props.searchProps) {
            search = <SearchBar { ...this.props.searchProps } />
        }

        return (
            <div>
                {search}
                {button}
                <Modal show={this.state.modal} onHide={this.toggle}>
                    <Modal.Header closeButton>
                        <Modal.Title>{title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <AddEditForm
                            toggle={this.toggle}
                            idiom={this.props.idiom} />
                    </Modal.Body>
                </Modal>
            </div>
        )
    }
}

export default ModalForm;