
import './App.css';

import React, {useState } from 'react'
import Navbar from './components/Navbar';
// import News setProgress={setProgress} apiKey={apiKey} from './components/News setProgress={setProgress} apiKey={apiKey}';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'


const App=()=> {
  
  const apiKey="4a026c80b9fb4413a29d6c149557db41"
  const [progress, setProgress] = useState(0)

    return (
      <div>
    
   
     <Router>
        <Navbar/>
     <LoadingBar
        height={3}
        color='#f11946'
        progress={progress}
        
        />
       <Routes>
         <Route exact path="/sports" element={<News setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={8} country="in" category="sports"/>}></Route>
         <Route exact path="/science" element={<News setProgress={setProgress} apiKey={apiKey} key="science" pageSize={8} country="in" category="science"/>}></Route>
        <Route exact path="/health" element={<News setProgress={setProgress} apiKey={apiKey}  key="health"pageSize={8} country="in" category="health"/>}></Route>
        
         <Route exact path="/" element={<News setProgress={setProgress} apiKey={apiKey}  key="general" pageSize={8} country="in" category="general"/>}></Route>
        
         <Route exact path="/entertainment" element={<News setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize={8} country="in" category="entertainment"/>}></Route>
        
         <Route exact path="/technology" element={<News setProgress={setProgress} apiKey={apiKey}  key="technology"pageSize={8} country="in" category="technology"/>}></Route>
        
         <Route exact path="/business" element={<News setProgress={setProgress} apiKey={apiKey} key="business" pageSize={8} country="in" category="business"/>}></Route>
        </Routes>
      
      
        
     </Router>
      
    
    

      </div>
    )
  }

export default App;