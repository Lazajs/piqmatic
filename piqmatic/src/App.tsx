import { Routes, Route } from 'react-router-dom'
import Home from 'src/pages/Home'
import Detail from 'src/pages/Detail'

export default function App () {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/detail/:id' element={<Detail />} />
    </Routes>
  )
}
