import Nav       from './components/Nav'
import Hero      from './components/Hero'
import Expertise from './components/Expertise'
import Services  from './components/Services'
import Method    from './components/Method'
import Impact    from './components/Impact'
import Team      from './components/Team'
import Strengths from './components/Strengths'
import Banner    from './components/Banner'
import FAQ       from './components/FAQ'
import Contact   from './components/Contact'
import Footer    from './components/Footer'

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Expertise />
        <Services />
        <Method />
        <Impact />
        <Team />
        <Strengths />
        <Banner />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
