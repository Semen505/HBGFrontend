import React, { Component } from 'react'

function buildFileSelector(){
    const fileSelector = document.createElement('input');
    fileSelector.setAttribute('type', 'file');
    fileSelector.setAttribute('accept', 'image/*');
    return fileSelector;
  }
  
  class FileDialog extends Component {
    componentDidMount(){
      this.fileSelector = buildFileSelector();
      this.fileSelector.onchange = this.handleChange;
    }

    handleChange = (event) => {
        this.props.onPortfolioChange(event);
    }
    
    handleFileSelect = (e) => {
      e.preventDefault();
      this.fileSelector.click();
    }
    
    render(){
    return <div href="" onClick={this.handleFileSelect}>{this.props.children}</div>
    }
  }

 export default FileDialog;