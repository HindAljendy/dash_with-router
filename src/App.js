import { Link, Route , Routes  } from 'react-router-dom';
import './App.css';
import Blogs from './pages/Blogs/Blogs';
import Gallery from './pages/Gallery/Gallery';
import Rooms from './pages/Rooms/Rooms';
import Booking from './pages/Booking/Booking';
import Explore from './pages/Explore/Explore';
import Food from './pages/Food/Food';
import Inbox from './pages/Inbox/Inbox';
import NewArticle from './componnents/NewArticle/NewArticle';
import EditArticle from './componnents/EditArticle/EditArticle';

import PopUp from './componnents/PopUp/PopUp';
import Sidebar from './componnents/Sidebar/Sidebar';


function App() {
  return (
      <div className='App'>
        <Sidebar/>
        {/* Routes the pages */}
        <Routes>
          <Route path='/' element={< Blogs />}/>
          <Route path='/gallery' element={< Gallery />}/>
          <Route path='/room' element={< Rooms />}/>
          <Route path='/booking' element={< Booking />}/>
          <Route path='/explore' element={< Explore />}/>
          <Route path='/food' element={< Food />}/>
          <Route path='/inbox' element={< Inbox />}/>
          <Route path='/new' element={< NewArticle />}/>
          <Route path='/edit_article' element={< EditArticle />}/>
          <Route path='/delete_article' element={< PopUp />}/>
        </Routes>
        
        
      </div>

  );
}

export default App;
