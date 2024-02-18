import React from 'react'
import Banner from '../components/layouts/Banner'
import Header from '../components/layouts/Header'
import Category from '../components/layouts/Category'
import Trending from '../components/layouts/Trending'

function Home() {
  return (
    <section>
        <Header/>
        <Banner/>
        <Category/>
        <Trending/>
       
    </section>
  )
}

export default Home