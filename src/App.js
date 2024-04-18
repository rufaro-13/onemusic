
        import Home from './pages/Home';
        import { BrowserRouter, Routes, Route } from 'react-router-dom';
        import Layout from './components/Layout';
        import Login from './pages/login';
        import ScrollToTop from './pages/ScrollToTop';

       import AudioPlayer from './components/AudioPlayer';
        function App() {
        
          return (
            <BrowserRouter basename='/'>
              <ScrollToTop/>
              <Routes>
                
                <Route path="/" element={<Layout/>}>
                <Route index element = {<Login/>}></Route>
                <Route forceRefresh={true} path='/home' element= {<Home/>}></Route>
                <Route forceRefresh={true} path='/audio_player' element= {<AudioPlayer/>}></Route>
            
                </Route>
              </Routes>
            </BrowserRouter>
          );
        }
        
        export default App;
    
 