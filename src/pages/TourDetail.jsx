import React from 'react'
import Header2 from '../components/layouts/Header2'
import Container from '../components/Container'
import GallerySlider from '../components/GallerySlider'
import BestSeller from '../components/layouts/BestSeller'

function TourDetail() {
  return (
    <>
    <Header2/>
    <Container>
        <GallerySlider/>
        <BestSeller title='Similar Tours'/>
    </Container>
    </>
  )
}

export default TourDetail