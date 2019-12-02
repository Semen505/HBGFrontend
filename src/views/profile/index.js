import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { readProfileReq, saveProfileReq } from './actions'
import UserAvatar from './avatar.js'
import FileDialog from './FileDialog'
import { FIRST_NAME_CHANGE, LAST_NAME_CHANGE, BIO_CHANGE, PORTFOLIO_UPLOAD_REQUESTING, MODAL_CONFIRM } from './constants.js'
import './modal.css';

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Col
} from "reactstrap";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import TransparentFooter from "components/Footers/TransparentFooter.js";

class Modal extends Component {
  render() {
    const text = this.props.message;
    if (this.props.isSuccess) {
      return (
        <div className="alert alert-success" onClick={() => this.props.confirm()}>
          <strong>Success!</strong> {text}
        </div>
      )
    } else {
      return (
        <div className="alert alert-danger" onClick={() => this.props.confirm()}>
          <strong>Failed!</strong> {text}
        </div>
      )
    }   
  }
}

class ModalContainer extends Component {
  render() {
    if (this.props.isSuccess || this.props.isError)
      return (<Modal isSuccess={this.props.isSuccess} isError={this.props.isError} confirm={this.props.confirm} message={this.props.message}/>)
    else
      return (<div></div>)
  }
}

class Profile extends Component {
  constructor(props) {
    super(props);

    this.props.readProfile(this.props.id);
  }

  render () {
    const {
      profile: {
        first_name,
        last_name,
        bio,
        portfolio,
        user_id
      },
    } = this.props

    return (
      <>
      <IndexNavbar />
      <div className="page-header clear-filter" filter-color="blue">
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("assets/img/login.jpg") + ")"
          }}
        ></div>
        <div className="content">
          <Container>
              <Col className="ml-auto mr-auto" md="4">
              <ModalContainer isSuccess={this.props.profile.successful} isError={this.props.profile.error } confirm={this.props.onModalConfirm} message={this.props.profile.messages}></ModalContainer>
              <Card className="card-login card-plain">
                <h1>Profile</h1>
                <CardHeader className="text-center">
                  <div className="logo-container">
                    <FileDialog onPortfolioChange={this.props.onPortfolioChange}>
                      <UserAvatar size="68" name="Will Binns-Smith" src={this.props.profile.portfolio} 
                        style={{display: "flex",
                        justifyContent: "center",
                        alignItems: "center"}}/>
                    </FileDialog>
                  </div>
                </CardHeader>
                <CardBody>
                    <InputGroup
                      className={
                        "no-border input-lg" +
                        " input-group-focus"
                      }>
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="now-ui-icons users_circle-08"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                        <Input
                          placeholder="Your First Name"
                          name="first_name"
                          type="text"
                          id="first_name"
                          className="text"
                          value={first_name}
                          onChange={(event) => this.props.onFirstNameChange(event.target.value)}
                        />
                    </InputGroup>
                    <InputGroup
                      className={
                        "no-border input-lg" +
                        " input-group-focus"
                      }>
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="now-ui-icons users_single-02"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="Your Last Name"
                        name="last_name"
                        type="text"
                        id="last_name"
                        className="text"
                        value={last_name}
                        onChange={(event) => this.props.onLastNameChange(event.target.value)}
                      />
                    </InputGroup>
                    <InputGroup
                      className={
                        "no-border input-lg" +
                        " input-group-focus"
                      }>
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="now-ui-icons ui-2_favourite-28"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="Your Favorite"
                        name="bio"
                        type="text"
                        id="bio"
                        className="text"
                        value={bio}
                        onChange={(event) => this.props.onBioChange(event.target.value)}
                      />
                    </InputGroup>
                </CardBody>
                <CardFooter className="text-center">
                  <Button
                    block
                    className="btn-round"
                    color="info"
                    action="submit"
                    size="lg"
                    onClick={() => this.props.saveProfile(this.props.id, first_name, last_name, bio, portfolio)}>
                    Save
                  </Button>
                </CardFooter>
              </Card>
            </Col>
          </Container>
        </div>
        <TransparentFooter />
      </div>
      </>      
    )
  }
}

const mapStateToProps = (state) => ({
  profile: state.profile,
  id: state.client.id
})

function mapDispatchToProps(dispatch) {
  return {
      readProfile: user_id => dispatch(readProfileReq(user_id)),
      saveProfile: (user_id, first_name, last_name, bio, portfolio) => dispatch(saveProfileReq(user_id, first_name, last_name, bio, portfolio)),
      onFirstNameChange: (value) => dispatch({type: FIRST_NAME_CHANGE, payload: value}),
      onLastNameChange: (value) => dispatch({type: LAST_NAME_CHANGE, payload: value}),
      onBioChange: (value) => dispatch({type: BIO_CHANGE, payload: value}),
      onPortfolioChange: (event) => {
        dispatch({type: PORTFOLIO_UPLOAD_REQUESTING, event: event});
      },
      onModalConfirm: () => dispatch({type: MODAL_CONFIRM})
  };
}

const connected = connect(mapStateToProps, mapDispatchToProps)(Profile)

export default connected
