import React from 'react';
import icon_like from './assets/like.svg';

class IdiomMeta extends React.Component {
    render() {
        return (
            <div className="idiom-meta">
                <div className="idiom">
                    { this.props.idiom.title }
                </div>
                <div className="info">
                    {/* <a className="author" href="/"> */}
                        {'nastia'}
                    {/* </a> */}
                    <span className="date">
                        {new Date().toDateString()}
                    </span>
                </div>
                <div className="pull-xs-right">
                    <img src={icon_like} className="icon" alt="icon_like" />
                    <label className="like_font">{ this.props.idiom.likeCount }</label> 
                </div>
            </div>
          );
    }
}

export default IdiomMeta;
