import Header from './components/Header'
import About from './components/About'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Certifications from './components/Certifications'
import Footer from './components/Footer'
import './App.css'

export default function App(){
return (
<div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
<Header />
<main style={{ flex: 1, paddingTop: '4rem', paddingBottom: '4rem' }}>
<About />
<Projects />
<Experience />
<Certifications />
</main>
<Footer />
</div>
)
}