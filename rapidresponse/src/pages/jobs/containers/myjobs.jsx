import React, { Fragment, useState } from 'react';
import JobList from '../components/job-list';


class MyJobs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {userId: 1};
    
    
  }

  render() {
    return (
      <Fragment> 
        <h2 className='mx-auto mt-4'>My Jobs</h2>
        <JobList userId={this.state.userId} ></JobList>
      </Fragment>
    );
  }
}
export default MyJobs
