import React from 'react'
import { Routes, Route } from 'react-router-dom'
import BookContainer from './components/BookContainer/BookContainer'
import { BookDetails } from './components/BookDetails/BookDetails'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <Routes>
      <Route path='/' element={<BookContainer />} />
      <Route path='/book/:id' element={<BookDetails />} />
    </Routes>
  )
}

export default App
