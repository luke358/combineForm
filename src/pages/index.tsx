import React from 'react'
import { Link } from 'react-router-dom'

export default function index() {
  return (
    <>
      <Link to={'/form1'}>form1</Link>
      <Link to={'/form2'}>form2</Link>
    </>
  )
}
