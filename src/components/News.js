import React,{useEffect,useState} from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

const News=(props)=>{
   
    const [articles, setArticles] = useState([])
   const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)
   
   const  capitalizeFirstLetter=(string)=>
    {
        return string.charAt(0).toUpperCase()+string.slice(1);
    }
   

    const updateNews=async()=>
    {    
        props.setProgress(10);
        const url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
      
        setLoading(true)
        let data=await fetch(url);
        props.setProgress(30);
        let parsedData=await data.json()
        props.setProgress(70);

        setArticles(parsedData.articles)
        setTotalResults(parsedData.totalResults)
       setLoading(false)

        props.setProgress(100);
    }

    useEffect(() => {
        document.title=`${capitalizeFirstLetter(props.category)}- Akash News`
        updateNews()
        //eslint-disable-next-line
    },[])
    
   //async componentDidMount()
  //  {
    //     let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=4a026c80b9fb4413a29d6c149557db41&pageSize=${props.pageSize}`;
    //     setState({loading:true})
    //     let data=await fetch(url);
    //     let parsedData=await data.json()
    //     setState({articles: parsedData.articles,totalResults:parsedData.totalResults,loading:false})
    //
 //}

  //const  handlePrevClick=async()=>
   // {
    //     let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=4a026c80b9fb4413a29d6c149557db41&page=${page-1}&pageSize=${props.pageSize}`;
    //     setState({loading:true})
    //     let data=await fetch(url);
    //     let parsedData=await data.json()
       
    //     setState(
    //        {
    //         page:page-1,
    //         articles: parsedData.articles,
    //         loading:false
    //        }
          
    //    )
    
   // setpage(page-1)
   // updateNews();
       

   // }
  // const handleNextClick=async()=>
   // {
    //     if(page+1> Math.ceil(totalResults/props.pageSize))
    //     {

    //     }
    //     else
    //     {
           
    //         let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=4a026c80b9fb4413a29d6c149557db41&page=${page+1}&pageSize=${props.pageSize}`;
    //         setState({loading:true})
    //         let data=await fetch(url);
    //         let parsedData=await data.json()
    //        setState(
    //        {
    //         page:page + 1,
    //         articles: parsedData.articles,
    //         loading:false
    //        }
    //    )
    //     }
    
   // setpage(page+1)
   // updateNews();
       
  //  }


   const fetchMoreData = async () => {
      
      
       const url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
       setPage(page+1)
       let data=await fetch(url);
        let parsedData=await data.json()
        setArticles(articles.concat(parsedData.articles))
        setTotalResults(parsedData.totalResults)
     
        
      };

  
    return (
       <>
        <h1 className="text-center " style={{}}>AkkyNews-Top  {capitalizeFirstLetter(props.category)} Headlines</h1>
         
           <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length!==totalResults}
          loader={<Spinner/>}
          >
            <div className="container">
        {loading && <Spinner/>}
           <div className="row">
            {articles.map((element)=>{
            return <div className="col-md-4" key={element.url}>
            <NewsItem title={element.title} description={element.description} imgUrl={element.urlToImage} author={element.author} 
              date={element.publishedAt} source={element.source.name} newsUrl={element.url}/>
       </div>
 })
 }
 </div>
 </div>
 </InfiniteScroll>
      {/* <div className="d-flex justify-content-between">
      <button disabled={page<=1} type="button" className="btn btn-dark" onClick={handlePrevClick}>&laquo;previous</button>
      <button type="button" disabled={page+1> Math.ceil(totalResults/props.pageSize)} className="btn btn-dark" onClick={handleNextClick}>Next&raquo;</button>
    </div> */}
     
         
    </>
       
    )
  }

News.defaultProps=
{
    country:'in',
    pageSize:8,
    cotegory:'technology'
}
News.propTypes=
{
    country: PropTypes.string,
    pageSize:PropTypes.number,
    cotegory:PropTypes.string
}

export default News