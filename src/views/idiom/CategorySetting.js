import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { addClassify } from "../../redux/actions/idiom";
import { connect } from "react-redux";
//import CategoryModalForm from './CategoryModalForm';

function mapDispatchToProps(dispatch) {
    return {
        addClassify: classify => dispatch(addClassify(classify))
    };
}

const mapStateToProps = state => ({
    classifyList: state.idiom.classifyList,
});

class CategorySetting extends Component {
    state = {
        name: ''
    }

    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this);   
        this.handleChange = this.handleChange.bind(this);     
    }

    toggle = () => {
        this.setState(prevState => ({
            modal: !prevState.modal
        }))
    }
    
    handleChange(event) {
        this.setState(
            {[event.target.name]: event.target.value}
        );
    }

    handleSubmit(event) {
        event.preventDefault();
        let newClassify = {name: this.state.name};

        this.props.addClassify(newClassify);  
          
        this.setState({
            modal: false
        })
    }
    
    componentDidMount(){
        // if item exists, populate the state with proper data
        if(this.props.classify){
            const {name } = this.props.classify;
            this.setState({ name });
        }
    }

    render() {
        let classify_no = 0;
        const data = this.props.classifyList.map(item => {
            classify_no ++;
            return (
                <tr key={item.id}>
                    <th style={{width:"60px"}}>{classify_no}</th>
                    <td>{item.name}</td>
                    <td >
                        <div>
                            <button variant="secondary" className="btn btn-sm btn-outline-success pull-xs-right" style={{marginLeft:"10px"}}><i className="ion-ios-trash"></i></button>
                            <button className="btn btn-sm btn-outline-success pull-xs-right"><i className="ion-edit"></i></button>
                        </div>
                    </td>
                </tr>
            )
        });
        return (
            <div>
                <button onClick={this.toggle} className=" btn-floating btn btn-sm btn-outline-success pull-xs-right idiom-add-button"><i className="fa fa-plus"></i></button>  
                <Modal show={this.state.modal} onHide={this.toggle}>    
                    <Modal.Header closeButton>
                        <Modal.Title>Category Setting</Modal.Title>
                    </Modal.Header>
                    <Modal.Body style={{height:"350px"}}>
                        <div>
                            <table className="table table-scroll table-striped">                 
                                    <thead>
                                    <tr>
                                        <th style={{width:"60px"}}>No</th>
                                        <th>Classify</th>
                                        <th style={{width:"100px"}}>Actions</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                        { data }
                                    </tbody>
                            </table>
                        </div>
                    </Modal.Body>
                    <Modal.Footer style={{height:"70px"}}>
                        <input type="text" placeholder="Add New Classify" className="form-control" name="name" onChange={this.handleChange}/>  
                        <Button type="submit" className = "btn btn-success pull-xs-right modal-button" onClick={this.handleSubmit}>Add</Button>
                        {/* <CategoryModalForm buttonLabel="Add" addItemToState={this.addItemToState}/> */}
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}

const categorysetting = connect(mapStateToProps, mapDispatchToProps)(CategorySetting);
export default categorysetting;