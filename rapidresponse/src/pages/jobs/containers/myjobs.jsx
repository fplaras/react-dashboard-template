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
        <div className="row">
          <div className="col-sm-12 text-center">
            <h2 className='mt-4'>All Jobs</h2>
          </div>  
        </div>
        
        <JobList userId={this.state.userId} ></JobList>
      </Fragment>
    );
  }
}
export default MyJobs
