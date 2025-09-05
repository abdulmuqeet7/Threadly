import React from 'react';
import './Home.css';
import Navbar from '../../components/Navbar/Navbar';
import Recommend from '../../components/Recommend/Recommend';
import CommunityCard from '../../components/ThreadCard/ThreadCard';

const Home = () => {
  return (
    <div className="home-root">
      <Navbar />
      <div className="home-content">
        <div className="threads-section">
          <div className="trending-title">Trending Threads</div>
          <CommunityCard />
        </div>
        <div className="recommend-section">
          <Recommend />
        </div>
      </div>
    </div>
  );
};

export default Home;
