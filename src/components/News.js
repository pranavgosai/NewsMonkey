import React, { Component } from 'react'
import Newsitems from './Newsitems'

export class News extends Component {
   
    constructor(){
        super();
        console.log("hi i am a constructor from news component");
        this.state = {
            articles: [],
            loading:false,
            page:1
        }
    }
  async  componentDidMount(){

let url =`https://newsapi.org/v2/top-headlines?country={this.props.country}&category=business&apiKey=4e502e047a6f470398f8ef1b78dbd1c2&page=1&pagesize=${this.props.pagesize}`
let data =  await fetch(url);
let parsedData =  await data.json()
console.log(parsedData);
this.setState({articles:parsedData.articles, totalResults:parsedData.totalResults })

    }

    handlepreviousclick = async()=>{
console.log("previous");
let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=business&apiKey=4e502e047a6f470398f8ef1b78dbd1c2&page=${this.state.page - 1}&pagesize=${this.props.pagesize}`
let data =  await fetch(url);
let parsedData =  await data.json()
console.log(parsedData);

      this.setState({
        page:this.state.page - 1,
        articles:parsedData.articles
      })
    }
    handleNextclick  = async ()=>{
      console.log("next");
      if( this.state.page + 1> Math.ceil(this.state.totalResults/this.props.pagesize)){

      }else{

     
      let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=business&apiKey=4e502e047a6f470398f8ef1b78dbd1c2&page=${this.state.page + 1}&pagesize=${this.props.pagesize}`
let data =  await fetch(url);
let parsedData =  await data.json()
console.log(parsedData);

      this.setState({
        page:this.state.page + 1,
        articles:parsedData.articles
      })
    } 
    }

  render() {
    console.log("render");
    return (
      <div className="container my-3">
         
        <h1 className="text-center" >NewsMonkey - top headlines</h1>
        
        <div className="row">
    
        {this.state.articles.map((element)=>{
            return <div className="col-md-4" key={element.url}>
            <Newsitems  title={element.title?element.title.slice(0,44):""} description={element.description?element.description.slice(0,88):""} imgurl={element.urlToImage} newsurl={element.url} />
            </div>
        })}
            
        </div>
        <div className="container d-flex justify-content-between " >
        <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlepreviousclick} >previous &larr;</button>
        <button  disabled={this.state.page + 1> Math.ceil(this.state.totalResults/this.props.pagesize)} type="button" className="btn btn-dark" onClick={this.handleNextclick} >next &rarr;</button>
        </div>
      </div>
    )
  }
}

export default News
