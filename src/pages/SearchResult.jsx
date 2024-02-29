import React from 'react'
import Header2 from '../components/layouts/Header2'
import Container from '../components/Container'
import SearchCount from '../components/layouts/SearchCount'

function SearchResult() {
  return (
    <>
    <Header2/>
    <Container>
        <SearchCount/>
    </Container>
    </>
  )
}

export default SearchResult