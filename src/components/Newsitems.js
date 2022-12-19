import { getByTitle } from '@testing-library/react'
import React, { Component } from 'react'

export  class Newsitems extends Component {
  render() {
    let {title,description,imgurl,newsurl,author,Date,source } = this.props;
    return (
      <div className='my-3'>
      <div  className="card" style={{width: "18rem"}}>
  <img src={imgurl}  className="card-img-top" alt="..."/>
  <div  className="card-body">
    <h5  className="card-title">{title}  <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
   {source}
    <span class="visually-hidden">unread messages</span>
  </span></h5>
    <p  className="card-text">{description}...</p>
    <p class="card-text"><small className="text-muted">by{!author?"unknown" : author} on {Date}</small></p>
    <a href={newsurl} target="_blank" className=" btn btn-sm btn btn-dark">read nore</a>
  </div>
</div>
      </div>
    )
  }
}

export default Newsitems
