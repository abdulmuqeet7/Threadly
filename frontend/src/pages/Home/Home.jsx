import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import Recommend from '../../components/Recommend/Recommend'
import CommunityCard from '../../components/ThreadCard/ThreadCard'
const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="trending-title">Trending Threads</div>
      <CommunityCard></CommunityCard>
      <Recommend> </Recommend>
      
    </div>
  )
}

export default Home
