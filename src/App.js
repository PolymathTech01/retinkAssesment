import './App.css';
import Cards from './components/Card/Cards';
import Footer from './components/Footer/Footer.component';
import Header from './components/Header/Header.component';
import Hero from './components/Hero/Hero.component';
import Signup from './components/SignUp/Signup.component';

function App() {
  return (
    <div className='font-[poppins]'>
      <Header />
      <Hero />
      <Cards />
      <Signup />
      <Footer />
    </div>
  );
}

export default App;
