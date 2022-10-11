import { Route, Routes } from 'react-router-dom';
import AppStyles from './App.module.css';
import Nav from './Components/NavBar/Nav';
import About from './Pages/About';
import Projects from './Pages/Projects';
import Courses from './Pages/Courses';
import Blogs from './Pages/Blogs';
import Contact from './Pages/Contact';

function App() {
  return (
    <div className={AppStyles.App}>
      <section className={AppStyles.Container}>
        <div className={AppStyles.NavigationWrapper}>
          <div className={AppStyles.NavigationInnerInfo}>
            <div className={AppStyles.NavigationInnerInfoImg}>
              <img src="./assessts/heroImg.JPG.webp" alt="hero" />
            </div>
            <div className={AppStyles.NavigationInnerInfoTxt}>
              <h1>Farouk Khairy</h1>
              <p>Instructional Designer</p>
            </div>
            <div className={AppStyles.NavigationInnerInfoIcons}>
              <div className={AppStyles.icon}>
                <a href='mailto:farouk.khairy.official@gmail.com'>
                  <img src='./assessts/gmail.webp' alt='icon' />
                </a>
              </div>
              <div className={AppStyles.icon}>
                <a href='https://wa.me/+201095132145' rel="noopener noreferrer" target='_blank'>
                  <img src='./assessts/whatsapp.webp' alt='icon' />
                </a>
              </div>
              <div className={AppStyles.icon}>
                <a href='https://www.linkedin.com/in/farouk-khairy00/' rel="noopener noreferrer" target='_blank'>
                  <img src='./assessts/linkedin.webp' alt='icon' />
                </a>
              </div>
              <div className={AppStyles.icon}>
                <a href='https://github.com/farouk-byte' rel="noopener noreferrer" target='_blank'>
                  <img src='./assessts/git.webp' alt='icon' />
                </a>
              </div>
            </div>
          </div>
          <Nav />
        </div>
        <div className={AppStyles.ContentWrapper}>
          <Routes>
            <Route path='/' element={<About />} />
            <Route path='projects' element={<Projects />} />
            <Route path='courses' element={<Courses />} />
            <Route path='blog' element={<Blogs />} />
            <Route path='contact' element={<Contact />} />
          </Routes>
        </div>
      </section>
    </div>
  );
}

export default App;
