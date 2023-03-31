import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import Podcast from './pages/Podcast/Podcast';
import MovieList from './pages/Movies/Movies';
import Layout from './Layout';
import Home from './pages/Home/Home';
import NoPage from './pages/NoPage';

export default function App() {
  return (
    <BrowserRouter>
            
      <Routes>
                
        <Route path="/" element={<Layout />}>
                    
          <Route index element={<Home />} />
                    
          <Route path="podcast" element={<Podcast />} />
                    
          <Route path="movies" element={<MovieList />} />
                    
          <Route path="*" element={<NoPage />} />
                  
        </Route>
              
      </Routes>
          
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
