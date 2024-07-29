import React from 'react'
import Navbar from './components/navbar/Navbar'
import Sidebar from './components/sidebar/Sidebar'
import { useAuth } from './context/AuthProvider'

function App() {
  const {loading, data} = useAuth();
  console.log(loading)
  console.log(data)
  return (
    <>
      <Navbar />
      <Sidebar/>
    </>
  )
}

export default App
