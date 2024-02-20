import React from 'react'
import Banner from '../components/layouts/Banner'
import Header from '../components/layouts/Header'
import Category from '../components/layouts/Category'
import Trending from '../components/layouts/Trending'
import Destinations from '../components/layouts/Destinations'
import BestSeller from '../components/layouts/BestSeller'
import Tourguides from '../components/layouts/Tourguides'
import Promotion from '../components/layouts/Promotion'
import Newsletter from '../components/layouts/Newsletter'

function Home() {
  return (
    <section>
        <Header/>
        <Banner/>
        <Category/>
        <Trending/>
        <Destinations/>
        <BestSeller/>
        <Tourguides/>
        <Promotion/>
        <Newsletter/>
    </section>
  )
}

export default Home