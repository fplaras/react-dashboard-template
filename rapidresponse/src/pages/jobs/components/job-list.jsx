import React, { Fragment } from 'react';

class JobList extends React.Component {

    constructor(props) {
        super(props);
       console.log(props);
      }

    componentDidMount() {

    }
  
    componentWillUnmount() {
        
    }

    render() {
      return <h1>Hello, {this.props.userId}</h1>;
    }
  }

  export default JobList

