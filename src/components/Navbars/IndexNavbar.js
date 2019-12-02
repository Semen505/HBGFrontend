/*  Written by Bluepine, 2019-11-18 */

import React from "react";
// import { Link } from "react-router-dom";
import { connect } from 'react-redux'

//added by Bluepine
import history from 'history/history'
import {unsetClient} from 'redux/actions/client'

// reactstrap components
import {
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  UncontrolledTooltip
} from "reactstrap";
// import { stat } from "fs";

function IndexNavbar(props) {

  // const [navbarColor, setNavbarColor] = React.useState("");// React.useState("navbar-transparent");
  const [navbarColor] = React.useState("");

  const [collapseOpen, setCollapseOpen] = React.useState(false);
  React.useEffect(() => {
    const updateNavbarColor = () => {
    };
    window.addEventListener("scroll", updateNavbarColor);
    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });

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
  const gotoLogout = e => {
    e.preventDefault();
    if(props.id!=null) {
      console.log(props)
      props.logout();
      history.push('/index')
    }
  }

  //if logined
  if(props.id!=null)
    return (
      <>
        {collapseOpen ? (
          <div
            id="bodyClick"
            onClick={() => {
              document.documentElement.classList.toggle("nav-open");
              setCollapseOpen(false);
            }}
          />
        ) : null}
        <Navbar className={"fixed-top " + navbarColor} expand="lg" color="info">
          <Container>
            <div className="navbar-translate">
              <NavbarBrand
                  onClick={() => {
                    history.push('/index');
                  }}
                id="navbar-brand"
              >
                Study English
              </NavbarBrand>
              <UncontrolledTooltip target="#navbar-brand">
                Designed by Team.
              </UncontrolledTooltip>
              <button
                className="navbar-toggler navbar-toggler"
                onClick={() => {
                  document.documentElement.classList.toggle("nav-open");
                  setCollapseOpen(!collapseOpen);
                }}
                aria-expanded={collapseOpen}
                type="button"
              >
                <span className="navbar-toggler-bar top-bar"></span>
                <span className="navbar-toggler-bar middle-bar"></span>
                <span className="navbar-toggler-bar bottom-bar"></span>
              </button>
            </div>
            <Collapse
              className="justify-content-end"
              isOpen={collapseOpen}
              navbar
            >
              <Nav navbar>
                <NavItem>
                  <NavLink
                    onClick={gotoIdiom}
                  >
                    <i className="now-ui-icons files_paper"></i>
                    <p>Idiom</p>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    onClick={gotoRecord}
                  >
                    <i className="now-ui-icons tech_headphones"></i>
                    <p>Record</p>
                  </NavLink>
                </NavItem>
                
                <UncontrolledDropdown nav>
                  <DropdownToggle
                    caret
                    color="default"
                    href="#pablo"
                    nav
                    onClick={e => e.preventDefault()}
                  >
                    <i className="now-ui-icons users_circle-08"></i>
                    <p>{props.email}</p>
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem onClick={gotoProfile}>
                      <i className="now-ui-icons ui-2_settings-90"></i>
                      Profile
                    </DropdownItem>
                    <DropdownItem onClick={gotoLogout}>
                      <i className="now-ui-icons sport_user-run"></i>
                      Log out
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>                      
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </>
    );
  else
    return (
      <>
        {collapseOpen ? (
          <div
            id="bodyClick"
            onClick={() => {
              document.documentElement.classList.toggle("nav-open");
              setCollapseOpen(false);
            }}
          />
        ) : null}
        <Navbar className={"fixed-top " + navbarColor} expand="lg" color="info">
          <Container>
            <div className="navbar-translate">
              <NavbarBrand
                href="/index"
                id="navbar-brand"
              >
                Study English
              </NavbarBrand>
              <UncontrolledTooltip target="#navbar-brand">
                Designed by Team.
              </UncontrolledTooltip>
              <button
                className="navbar-toggler navbar-toggler"
                onClick={() => {
                  document.documentElement.classList.toggle("nav-open");
                  setCollapseOpen(!collapseOpen);
                }}
                aria-expanded={collapseOpen}
                type="button"
              >
                <span className="navbar-toggler-bar top-bar"></span>
                <span className="navbar-toggler-bar middle-bar"></span>
                <span className="navbar-toggler-bar bottom-bar"></span>
              </button>
            </div>
            <Collapse
              className="justify-content-end"
              isOpen={collapseOpen}
              navbar
            >
              <Nav navbar>
                <NavItem>
                  <NavLink
                    onClick={gotoIdiom}
                  >
                    <i className="now-ui-icons files_paper"></i>
                    <p>Idiom</p>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    onClick={gotoRecord}
                  >
                    <i className="now-ui-icons tech_headphones"></i>
                    <p>Record</p>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    href="/login"
                  >
                    <i className="now-ui-icons objects_key-25"></i>
                    <p>Sign In</p>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    href="/signup"
                  >
                    <i className="now-ui-icons arrows-1_cloud-download-93"></i>
                    <p>Sign Up</p>
                  </NavLink>
                </NavItem>
                {/* <UncontrolledDropdown nav>
                  <DropdownToggle
                    caret
                    color="default"
                    href="#pablo"
                    nav
                    onClick={e => e.preventDefault()}
                  >
                    <i className="now-ui-icons users_circle-08"></i>
                    <p>{props.email}</p>
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem onClick={gotoProfile} tag={Link}>
                      <i className="now-ui-icons ui-2_settings-90"></i>
                      Profile
                    </DropdownItem>
                    <DropdownItem onClick={gotoIdiom}>
                      <i className="now-ui-icons sport_user-run"></i>
                      Log out
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>                       */}
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </>
    );
    
    
}
function mapDispatchToProps(dispatch) {
  return {
    logout: () => dispatch(unsetClient())
  };
}
const mapStateToProps = state => {
  return { 
    id: state.client.id,
    email: state.client.email,
    token: state.client.token };
};


export default connect(mapStateToProps, mapDispatchToProps)(IndexNavbar)

