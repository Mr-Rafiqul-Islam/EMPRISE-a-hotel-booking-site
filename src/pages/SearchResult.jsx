import React from 'react'
import Header2 from '../components/layouts/Header2'
import Container from '../components/Container'
import SearchCount from '../components/layouts/SearchCount'
import TopFilter from '../components/layouts/TopFilter'

function SearchResult() {
  return (
    <>
    <Header2/>
    <Container>
        <SearchCount/>
        <TopFilter/>
        <div className="flex">
            <aside>
                
            </aside>
        </div>
    </Container>
    </>
  )
}

export default SearchResult