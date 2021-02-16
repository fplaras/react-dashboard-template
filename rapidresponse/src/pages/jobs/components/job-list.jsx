import React from 'react';
import axios from 'axios';
import { Fragment } from 'react';
class JobList extends React.Component {

  state= {
    jobList:[]
  }
    constructor(props) {
        super(props);
       console.log(props);
      }

    componentDidMount() {
      
      axios.get(`https://localhost:44351/api/jobs/all`)
      .then(res => {
        const jobList = res.data;
        this.setState({ jobList });
      })
    }
  
    componentWillUnmount() {
        
    }

    render() {
      return (
        <Fragment>
        <div className="table-responsive">
         <table class="table">
          <thead class="thead-dark">
            <th>Job ID</th>
            <th>Status</th>
            <th>Description</th>
          </thead>
          <tbody>
          {
          this.state.jobList.length > 0 ?
            this.state.jobList.map(job => 
              <tr>
                <td>
                  {job.id}
                </td>
                <td>
                  {job.status.status}
                </td>
                <td>
                  {job.request.product.shortDescr}
                </td>
              </tr>
            ):
            <tr>
              <td  style={{background: "#c6c8ca"}} className="text-center" colSpan="3">No Jobs Available</td>
            </tr>
            }
          
          </tbody>
          </table>
         
      </div>
        </Fragment>
       
      )
    }
  }

  export default JobList

