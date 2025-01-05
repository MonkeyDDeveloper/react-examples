import './style.css'
import React from 'react'
import FetchDependency from './modules/fetch-dependency/Main.jsx'
import CardWrapper from './modules/components-props/Main.jsx'
import MovieSearcher from './modules/movie-search/Main'
import CounterExample from './modules/couter-example/Main.jsx'
import Store from './modules/store/Main.jsx'
import NotFound from './common/components/404.jsx'
import { Navigation } from './common/components/Navigation.jsx'
import { Route, Routes } from 'react-router-dom'

export default function App () {
  const navs = [
    { name: 'Fetch dependency', path: '/' },
    { name: 'Card', path: '/card' },
    { name: 'Movie searcher', path: '/movie' },
    { name: 'Counter Example', path: '/counter' },
    { name: 'Store ', path: '/store' }
  ]

  return (
    <main style={{ paddingTop: '.5rem' }}>
      <header>
        <Navigation navItems={navs} />
      </header>
      <Routes>
        <Route path='/' element={<FetchDependency />} />
        <Route path='/card' element={<CardWrapper />} />
        <Route path='/movie' element={<MovieSearcher />} />
        <Route path='/counter' element={<CounterExample />} />
        <Route path='/store' element={<Store />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </main>
  )
}
