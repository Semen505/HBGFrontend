/*  
* Written by Pooh, 2019-11-08 
* Updated by Dragon, 2019-11-13, for integrating redux-saga
*/

import React from 'react';
import { Button, Form, Col } from 'react-bootstrap';
import { connect } from "react-redux";
import { addIdiom, updateIdiom } from "../../redux/actions/idiom";

function mapDispatchToProps(dispatch) {
    return {
        addIdiom: idiom => dispatch(addIdiom(idiom)),
        updateIdiom: idiom => dispatch(updateIdiom(idiom))
    };
}

const mapStateToProps = state => {
  return { classifyList: state.idiom.classifyList };
};  

class ConnectedAddEditForm extends React.Component {
    state = {
        id: 0,
        classifyId: 1,
        title: '',
        description: '',
        example: '',
        likeCount: 0,
        dislikeCount: 0,
        validated: false,
        isLike: 0
    }

    onChange = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    submitFormAdd = e => {
        e.preventDefault();
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.stopPropagation();
            this.setState({validated: true});
        } else {
            this.setState({validated: true});
            this.props.addIdiom(this.state);
            this.props.toggle()
        }
    }

    submitFormEdit = e => {
        e.preventDefault();
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.stopPropagation();
            this.setState({validated: true});
        } else {
            this.setState({validated: true});            
            this.props.updateIdiom(this.state);
            this.props.toggle();
        }
    }

    componentDidMount(){
        // if item exists, populate the state with proper data
        if(this.props.idiom){
            const { id, classifyId, title, description, example, likeCount, dislikeCount } = this.props.idiom;
            this.setState({ id, classifyId, title, description, example, likeCount, dislikeCount });
        }
    }

    render() {
        return (
            <Form noValidate validated={this.state.validated} onSubmit={this.props.idiom ? this.submitFormEdit : this.submitFormAdd}>
                <Form.Row>
                    <Form.Group as={Col} md="12">
                        <Form.Label>Classify</Form.Label>
                        <Form.Control as="select" name = 'classifyId' id = 'classifyId' onChange={this.onChange} value={this.state.classifyId}>
                            {this.props.classifyList.map((classify, index) => (
                                <option value={classify.id} key={index}>{classify.name}</option>
                            ))}
                        </Form.Control>
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col} md="12">
                        <Form.Label>Title</Form.Label>
                        <Form.Control required type="text" name="title" id="title" onChange={this.onChange} value={this.state.title === null ? '' : this.state.title} />
                        <Form.Control.Feedback type="invalid">
                            Please enter a Title.
                        </Form.Control.Feedback>
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col} md="12">
                        <Form.Label>Description</Form.Label>
                        <Form.Control required as="textarea" rows="4" name="description" id="description" onChange={this.onChange} value={this.state.description === null ? '' : this.state.description} />
                        <Form.Control.Feedback type="invalid">
                            Please enter a Description.
                        </Form.Control.Feedback>
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col} md="12">
                        <Form.Label>Example</Form.Label>
                        <Form.Control required as="textarea" rows="3" name="example" id="example" onChange={this.onChange} value={this.state.example === null ? '' : this.state.example}/>
                        <Form.Control.Feedback type="invalid">
                            Please enter a Example.
                        </Form.Control.Feedback>
                    </Form.Group>
                </Form.Row>
                <Button type="submit" className = "btn btn-success pull-xs-right modal-button">Ok</Button>
                <Button onClick={this.props.toggle} variant="secondary" className = "pull-xs-right modal-button" style={{marginRight:"10px"}}>Cancel</Button>
            </Form>
        );
    }
}

const AddEditForm = connect(mapStateToProps, mapDispatchToProps)(ConnectedAddEditForm);

export default AddEditForm;