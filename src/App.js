import './App.css';
import Cards from './components/Card/Cards';
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
    </div>
  );
}

export default App;
