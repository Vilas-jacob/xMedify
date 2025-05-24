import { useState } from 'react'
import './App.css'
import Home from './Components/Home/Home';
//import Search from './Components/Search/Search';
import SearchResults from './Pages/SearchResults';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MyBooking from './Pages/MyBooking';

function App() {
  //const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
       {/** <Route path='/search' element={<Search />} /> */} 
        <Route path='/search-results' element={<SearchResults />} />
        <Route path='/my-bookings' element={<MyBooking />} />
      </Routes>
    </Router>
  )
}

export default App
