import React, { Suspense } from 'react'
import { useRoutes } from 'react-router-dom'
import routes from '~react-pages'
import './App.css'

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      {useRoutes(routes)}
    </Suspense>
  )
}

export default App
