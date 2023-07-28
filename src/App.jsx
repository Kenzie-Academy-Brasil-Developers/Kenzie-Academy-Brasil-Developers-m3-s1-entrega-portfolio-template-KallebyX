import AboutMeSection from './component/AboutMeSection/index.jsx';
import BannerSection from './component/BannerSection/index.jsx';
import Footer from './component/Footer/index.jsx';
import Header  from './component/Header/index.jsx';
import ProjectSection  from './component/ProjectSection/index.jsx';
import TechSection  from './component/TechSection/index.jsx';
import "./styles/index.css";


function App() {

  return (
    <>
      <div className="Header">
        <Header />
      </div>
      <div className='BannerSection'>
        <BannerSection />
      </div>
      <div className='AboutMeSection'>
        <AboutMeSection />
      </div>
      <div className='TechSection'>
        <TechSection />
      </div>
      <div className='ProjectSection'>
        <ProjectSection />
      </div>
      <div className='Footer'>
        <Footer />
      </div>
    </>
  )
}

export default App;