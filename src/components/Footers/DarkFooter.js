/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";
import { connect } from 'react-redux'
import history from 'history/history'

// reactstrap components
import { Container } from "reactstrap";

function DarkFooter(props) {
  const gotoIdiom = e => {
    e.preventDefault();
    if(props.id!=null) {
      history.push('/idiom')
    }
    else{
      alert("Please login.")
      history.push('/login')
    }
    // this.props.idiom();
  }
  const gotoRecord = e => {
    e.preventDefault();
    if(props.id!=null) {
      history.push('/record')
    }
    else{
      alert("Please login.")
      history.push('/login')
    }
    // this.props.idiom();
  }
  const gotoProfile = e => {
    e.preventDefault();
    if(props.id!=null) {
      history.push('/profile')
    }
    else{
      alert("Please login.")
      history.push('/login')
    }
    // this.props.idiom();
  }
  return (
    <footer className="footer" data-background-color="black">
      <Container>
        <nav>
          <ul>
            <li>
              <a
                onClick={gotoIdiom}
              >
                Idiom
              </a>
            </li>
            <li>
              <a
                onClick={gotoRecord}
              >
                Record
              </a>
            </li>
          </ul>
        </nav>
        <div className="copyright" id="copyright">
          © {new Date().getFullYear()}, Designed by{" "}
          <a
            href="https://www.invisionapp.com?ref=nukr-dark-footer"
            target="_blank"
          >
            Team
          </a>
        </div>
      </Container>
    </footer>
  );
}

const mapStateToProps = state => {
  return { 
    id: state.client.id,
    email: state.client.email,
    token: state.client.token };
};


export default connect(mapStateToProps)(DarkFooter)

