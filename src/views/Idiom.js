/*  Written by Pooh, 2019-11-08 */

import React from 'react';
import Banner from './idiom/Banner'
import IdiomList from './idiom/IdiomList';
import Categories from './idiom/Categories';
import { connect } from "react-redux";
import CategorySetting from './idiom/CategorySetting';

// import 'bootstrap/dist/css/bootstrap.min.css';
import "assets/css/bootstrap.min.css";

import './idiom/idiom_app.css';

class ConnectedApp extends React.Component {
  render() {
    return (   
      <div className="home-page">
        <Banner />
        <div className="container page">
          <div className="row">
            <div className="col-md-3">
              <div className="sidebar" style={{marginTop: "7px"}}>
                <CategorySetting />
                <p>Popular Category</p>
                <Categories />  
              </div>
            </div> 
            <div className="col-md-9">
              <IdiomList/>  
            </div>                  
          </div>
        </div>  
       </div>
    );
  }
}

const mapStateToProps = state => ({
  idioms: state.idiom.idioms,
});

const Idiom = connect(mapStateToProps)(ConnectedApp);

export default Idiom;
