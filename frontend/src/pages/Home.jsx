import React from 'react'
import Hero from '../components/ui/Hero'
import HomeServices from '../components/ui/HomeServices'
import HBadges from '../components/ui/HBadges'
import HomeSharedExperience from '../components/ui/HomeSharedExperience'

const Home = () => {
  return (
    <div>
      <Hero/>
      <HomeServices/>
      <HBadges/>
      <HomeSharedExperience/>
    </div>
  )
}

export default Home
