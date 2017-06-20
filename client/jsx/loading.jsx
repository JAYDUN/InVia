import React from 'react';
import ReactDOM from 'react-dom';

class Loading extends React.Component {
    render () {
        return  (
            <div id="loading">
                <div id="loading-center">
                    <div id="loading-center-absolute">
                        <div id="object"></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Loading;