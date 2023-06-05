import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './Pages/Home';
import About from './Pages/About';
import NotFound from './Pages/NotFound';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import { GithubProvider } from './components/context/github/GithubContext';
import { AlertProvider } from './components/context/github/alert/AlertContext';
import Alert from './components/layout/Alert';
import User from './Pages/User';



function App() {
  return (
    <GithubProvider>
      <AlertProvider>
          <Router >
            <div className='flex flex-col justify-between h-screen'>
              <Navbar />

              <main className='conatiner mx-auto px-3 pb-12'>
                <Alert />
                  <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/user/:login' element={<User />} />
                    <Route path='/NotFound' element={<NotFound />} />
                    <Route path='/*' element={<NotFound />} />
                  </Routes>
              </main>

              <Footer />

            </div>
          </Router>
      </AlertProvider>
    </GithubProvider>
  );
}

export default App;

