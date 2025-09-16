"use client"
import Header from '../components/Header'
import Footer from '../components/Footer'
import Home from './Home'
import PetsList from './PetList'
import PetDetails from './PetDetails'
import PetForm from './PetForm'
import About from './About'

export default function App() {
  return (
    <>
      <Header />
      <main style={{ padding: '20px', minHeight: '70vh' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pets" element={<PetsList />} />
          <Route path="/pets/new" element={<PetForm />} />
          <Route path="/pets/edit/:id" element={<PetForm />} />
          <Route path="/pets/:id" element={<PetDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
