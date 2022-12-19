import {BrowserRouter as  Router, Routes, Route} from 'react-router-dom'
import Home from './components/pages/Home';
import Company from './components/pages/Company';
import Contact from './components/pages/Contact';
import Container from './components/layout/Container';
import NewProject from './components/pages/NewProject';
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Projects from './components/pages/Projects';

function App() {
  return (
    <Router>
<Navbar/>
<Container customClass='min-height'>
<Routes>
  <Route  path='/' exact='true' element={<Home/>}></Route>
  <Route path='/projects' exact='true' element={<Projects/>}/>
  <Route  path='/company' element={<Company/>}></Route>
  <Route  path='/contact' element={<Contact/>}></Route>
  <Route  path='/newproject' element={<NewProject/>}></Route>
</Routes>
</Container>
<Footer/>

    </Router>
  );
}

export default App;
