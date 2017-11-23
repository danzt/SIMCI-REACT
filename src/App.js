//Dependencies
import React, {Component} from 'react';
import PropTypes from 'prop-types';
//Styles
import './App.css';

class App extends Component {

    constructor() {
        super();
    }

    static propTypes = {
        children: PropTypes.object.isRequired
    };

    render() {
        //const { children } = this.props;

        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}

App.propTypes = {
    children: PropTypes.element
};


export default App;