import { Routes, Route } from 'react-router-dom'
import Home from 'src/pages/Home'
import Layout from './components/Layout'

export default function App () {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </Layout>
  )
}
