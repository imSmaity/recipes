import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Card from './components/Card';
import Search from './Search'
import './style/home.css';


const DidNotMatch=()=>{
  return(
  <div className='ms-5'>
    <ul className='ms-5'>
      <h5>Did not match any recipes.</h5>
      Suggestions:
      <li>Make sure that all words are spelled correctly.</li>
      <li>Try different keywords.</li>
      <li>Try more general keywords.</li>
    </ul>
  </div>
  )
}

const Home = () => {
  const [fetchData,setFetchData]=useState({isLoading:true,data:null,error:null})
  const [query,setQuery]=useState('')

  useEffect(()=>{
    const options = {
      method: 'GET',
      url: 'https://tasty.p.rapidapi.com/recipes/list',
      params: {from: '40', size: '30',q: query},
      headers: {
        'X-RapidAPI-Host': 'tasty.p.rapidapi.com',
        'X-RapidAPI-Key': '5286eb04damsh51785374dfedbccp1b59f7jsnabdfaa3a08d5'
      }
    };
    
    axios.request(options).then(function (response) {
        setFetchData({
            isLoading:false,
            data:response.data,
            error:null
        })
    }).catch(function (error) {
        setFetchData({
            isLoading:false,
            data:null,
            error:error
        })
    });
  },[query,setFetchData])
  const searching=(e)=>{
    setFetchData({...fetchData,isLoading:true})
    setQuery(e.target.value.toLowerCase())
    
  }

  return (
    <div className='row app-cards' >
        <h3 className=' col-12 mt-4 title text-center fixed-top'>Fav🍛rite Recipes</h3>
        <center className='col-12 fixed-top' id='search'>
            <Search searching={searching}/>
        </center>
        <div className='col-12 m'></div>
        {
          fetchData.isLoading?
          <div className="d-flex justify-content-center">
            <div className="spinner-border" style={{width: '3rem', height: '3rem'}} role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>:
          fetchData.error===null?
          fetchData.data.results.length!==0?
            fetchData.data.results.map((re)=>{
                return (
                  <center className='col-lg-4 col-md-6 col-12 cards' key={re.id}>
                    <Card recipe={re}/>
                  </center>
                )
              }):
              
              <DidNotMatch/>:
            <div>Loading...</div>
        }
        
    </div>
  )
}

export default Home