import React from 'react'

const NewsItem=(props)=> {
   
  
     let {title,description,imgUrl,newsUrl,author,date,source}=props;
    return (
    
          < div className="card">
            <div style={{
    display: `flex`,
    justifyContent: `flex-end`,
    position: `absolute`,
    right: `0`
}}>

          <span class=" badge rounded-pill bg-danger">
            {source}
        </span>
            </div>
            <span className="badge text-bg-secondary"></span>
         <img src={!imgUrl?imgUrl= "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/4CW7EIBYPAI63OFPBICOLXB5WY.jpg&w=1440":imgUrl} className="card-img-top" alt="..."/>
        <div className="card-body">
         <h5 className="card-title">{title}    <p className="card-text"><small className="text-danger">.....<br/>by {author?author:"Unknown"} on {new Date(date).toLocaleDateString()}</small></p>
  </h5>
    <p className="card-text">{description}</p>
    <a href={newsUrl} target="blank" className="btn btn-sm btn-primary bg-dark">Read More</a>
  </div>

      </div>
    )
  }


export default NewsItem