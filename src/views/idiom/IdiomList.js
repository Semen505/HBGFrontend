/*  Written by Pooh, 2019-11-08 */

import React from 'react';
// import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "assets/css/bootstrap.min.css";
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import ToolkitProvider from 'react-bootstrap-table2-toolkit';
import IdiomDetail from './IdiomDetail';
import ModalForm from './ModalForm';
import { connect } from "react-redux";
import IdiomMeta from './IdiomMeta';

const mapStateToProps = state => {
  return { idioms: state.idiom.idioms };
};
const columns = [{
  dataField: 'idiom',
  text: 'Idioms help us enrich our language'
}];

const expandRow = {
  onlyOneExpanding: true,
  renderer: (row) => (
    <div>
      {row.IdiomDetail}
    </div>
  )
};

class ConnectedIdiomList extends React.Component {
  render() {
    var idiom_array = [];
    if (this.props.idioms !== undefined && this.props.idioms.length !== 0) {
      this.props.idioms.map((idiom, index) => (
        idiom_array.push({
          id : index, 
          idiom : <IdiomMeta idiom = {idiom} />, 
          IdiomDetail : <IdiomDetail idiom = {idiom} /> 
        })
      ));
    }

    return (
      <div>
          <ToolkitProvider
              keyField="id"
              data={ idiom_array }
              columns={ columns }
              search
              >
              {
                  props => (
                    <div>                                                
                      {/* <SearchBar { ...props.searchProps } /> */}
                      <ModalForm buttonLabel="Add Idiom" searchProps={props.searchProps}/>
                      <BootstrapTable bootstrap4 
                          keyField='id' 
                          data={ idiom_array } 
                          columns={ columns } 
                          { ...props.baseProps }
                          expandRow={ expandRow } 
                          pagination={ paginationFactory() } 
                      />
                    </div>
                  )
              }
              </ToolkitProvider>
      </div>
    );
  }
}

const IdiomList = connect(mapStateToProps)(ConnectedIdiomList);

export default IdiomList;