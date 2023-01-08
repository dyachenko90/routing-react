import './App.css';
import { Route, createBrowserRouter, createRoutesFromElements} from 'react-router-dom';
import Home from './components/Home';
import News from './components/News';
import Posts, { postsLoader } from './components/Posts';
import Post, { postLoader } from './components/Post';
import Contacts from './components/Contacts';
import Registration from './components/Registration';
import Team from './components/Team';
import About from './components/About';
import Notfound from './components/Notfound';
import Layout from './components/Layout';
import Edit from './components/Edit';


export const router = createBrowserRouter(createRoutesFromElements(

      <Route path='/' element={<Layout />}>
        <Route index element={<Home />}/>
        <Route path='news' element={<News />}/>
        <Route path='posts' element={<Posts />} loader={postsLoader}/>
        <Route path='posts/:id' element={<Post />} loader={postLoader}/>
        <Route path='posts/:id/edit' element={<Edit />} loader={postLoader}/>
        <Route path='about' element={<About />}>
          <Route path='contacts' element={<Contacts />} />
          <Route path='team' element={<Team />} />
        </Route>
        <Route path='registration' element={<Registration />}/>
        <Route path='*' element={<Notfound />}/>
      </Route>

))


function App() {

  return (
    <div className='app'>
    
    </div>
  );
}

export default App;
