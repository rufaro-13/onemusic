
        import Home from './pages/Home';
        import { BrowserRouter, Routes, Route, } from 'react-router-dom';
        import Layout from './components/Layout';
        import Layout1 from './components/layou1';
        import Login from './pages/login';
        import ScrollToTop from './pages/ScrollToTop';
        import RegistartionForm from './components/Signup';
       import AudioPlayer from './components/AudioPlayer';
        import Upload from './pages/upload';
        import Playlist from './pages/Playlist';
        function App() {
        
          return (
            <BrowserRouter basename='/'>
             
              <ScrollToTop/>
              <Routes>
                
                <Route path="/" element={<Layout1/>}>
                <Route index element={<RegistartionForm />} />
                <Route path='/login' element = {<Login/>}></Route>
               
            
                </Route>

                <Route path="/main" element={<Layout />}>
                <Route index element={<Home />} />
                <Route forceRefresh={true} path='/main/audio_player' element= {<AudioPlayer/>}></Route>
                <Route forceRefresh={true} path='/main/upload' element= {<Upload/>}></Route>
                <Route forceRefresh={true} path='/main/playlist' element= {<Playlist/>}></Route>

              </Route>
              </Routes>
            </BrowserRouter>
          );
        }
        
        export default App;
    
 