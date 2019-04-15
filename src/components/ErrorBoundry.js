import React, { Component } from 'react';

class ErrorBoundry extends Component {
    constructor(props) {
        super(props);
        //make property false 
        //(hasError is a property of state)
        this.state = {
            hasError: false
        }
    }

    //this is like a try catch for a component
    componentDidCatch(error, info) {
        this.setState({ hasError: true}) 
    }

    render(){
        //render error message if not catch component
        if(this.state.hasError) {
            return <h1> Oops.. Some error occured</h1>
        }
        //else render the component 
        //children is 'CardList'
        return this.props.children
    }
}

export default ErrorBoundry;