import React from 'react'
import { useRoutes } from 'react-router-dom'
import routes from '~react-pages'
import './App.css'

function App() {
  return (
    <>
      {useRoutes(routes)}
    </>
  )
}

export default App
