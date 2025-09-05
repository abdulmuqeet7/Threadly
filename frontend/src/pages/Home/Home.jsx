import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import Recommend from '../../components/Recommend/Recommend'
const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="trending-title">Trending Threads</div>
      <Recommend> </Recommend>
    </div>
  )
}

export default Home
