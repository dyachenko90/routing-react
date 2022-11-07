import './App.css';
import { Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import News from './components/News';
import Posts from './components/Posts';
import Post from './components/Post';
import Contacts from './components/Contacts';
import Registration from './components/Registration';
import Team from './components/Team';
import About from './components/About';
import Notfound from './components/Notfound';
import Layout from './components/Layout';


function App() {
  return (
    <div className='app'>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />}/>
          <Route path='news' element={<News />}/>
          <Route path='posts' element={<Posts />}/>
          <Route path='posts/:id' element={<Post />} />
          <Route path='about' element={<About />}>
            <Route path='contacts' element={<Contacts />} />
            <Route path='team' element={<Team />} />
          </Route>
          <Route path='registration' element={<Registration />}/>
          <Route path='*' element={<Notfound />}/>
        </Route>
      </Routes>
    </div>


  );
}

export default App;
