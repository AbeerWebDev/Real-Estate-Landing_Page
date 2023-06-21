import Navbar from '../../components/Navbar/Navbar'
import Header from '../../components/Header/Header'
import About from '../../components/About/About'
import Developer from '../../components/Developer/Developer'
import Location from '../../components/Location/Location'
import './Home.scss'
import Contact from '../../components/Contact/Contact'

const Home = () => {

  return (
    <div className="home">
      <Navbar />
      <Header />
      <About />
      <Developer />
      <Location />
      <Contact />
    </div>
  );
}

export default Home