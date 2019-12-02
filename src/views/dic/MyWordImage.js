/**
 * @author dolphin
 * @date 2019.11.1
 * @description Shows the image gallery of a specific word.
 */

import React from 'react';
//import './App.css';
import './dic.css';
import Carousel from 'react-images';

const images = [
    { src: "/back1.jpg" },
    { src: "/back2.jpg" },
    { src: "/back3.jpg" }
];

/*var visible = true;

function setVisible(flag) {
    visible = flag;
}*/

/*

                <button onClick={() => { setVisible(true); }}>show</button>
                <Viewer
                    visible={visible}
                    onClose={() => { setVisible(false); }}
                    images={images}
                />
                */

class MyWordImage extends React.Component {

    render() {
        return (
            <div id="my-word-image-box">
                <Carousel views={images} id="my-word-image-view" className="my-word-image-view"
                    styles={{
                        container: base => ({
                        ...base,
                        backgroundColor: '#fafafa',
                        boxShadow:
                            '0 1px 10px -1px rgba(0,0,0,0.2), 0 0 0 1px rgba(0,0,0,0.04), 0 1px 0 rgba(0,0,0,0.04)',
                        padding: 10,
                        width: 300
                        }),
                        view: (base, state) => ({
                            ...base,
                            filter: state.interactionIsIdle ? 'grayscale(100%)' : null,
                            paddingBottom: `${10 / 16 * 100}%`,
                            overflow: 'hidden',
                            position: 'relative',
                            transition: 'filter 300ms',
            
                            '& > img': {
                              position: 'absolute',
                              left: 0,
                              top: 0,
                            },
                          })
                    }}/>
            </div>
        )
    }
}

export default MyWordImage;
