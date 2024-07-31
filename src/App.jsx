import React from 'react'
import Navbar from './components/navbar/Navbar'
import Sidebar from './components/sidebar/Sidebar'
import { useAuth } from './context/AuthProvider'
import { Route, Routes } from 'react-router-dom'
import Search from './components/search/Search'
import Home from './components/home/Home'
import Playvideo from './components/playvideo/Playvideo'
import Loading from './loader/Loading'

function App() {
  // const {loading, data} = useAuth();
  // console.log(loading)
  // console.log(data)
  const {loading} = useAuth();

  return (
    <>
      {loading && <Loading/>}
      <Navbar />
      {/* <Sidebar/> */}
      <Routes>
        <Route path='/' exact element={<Home/>} />
        <Route path='/search/:searchQuery' element={<Search/>} />
        <Route path='/video/:id' element={<Playvideo/>} />
      </Routes>
    </>
  )
}

export default App
