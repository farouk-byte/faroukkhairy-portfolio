import React, { useState } from 'react'
import GlobalStyles from '../Styles/global.module.css';
import SubContent from './SubContent.module.css'

const Projects = () => {
  const [webProjects] = useState([
    {
      id: "1",
      name: "Splash",
      imgURL: "./assessts/splash.webp",
      githubURL: "https://github.com/farouk-byte/Splash.git",
      liveURL: "https://splash-phi.vercel.app/"
    },
    {
      id: "2",
      name: "MECA",
      imgURL: "./assessts/meca.webp",
      githubURL: undefined,
      liveURL: "https://www.mecaegypt.com/"
    },
    {
      id: "3",
      name: "Private KSA",
      imgURL: "./assessts/privateksa.webp",
      githubURL: "https://github.com/farouk-byte/ksaprivatteacher.git",
      liveURL: "https://ksaprivatteacher.vercel.app/"
    },
  ])

  const [eProjects] = useState([
    {
      id: "1",
      name: "Solar System",
      imgURL: "./assessts/slorsystem.webp",
      githubURL: undefined,
      liveURL: "https://360.articulate.com/review/content/7a733abb-55cb-4be4-acfb-7a97dc3f29bb/review"
    }
  ])
  const [behance] = useState([
    {
      id: "1",
      name: "Behance",
      imgURL: "./assessts/behance.svg",
      liveURL: "https://360.articulate.com/review/content/7a733abb-55cb-4be4-acfb-7a97dc3f29bb/review"
    }
  ])



  const showWebProjects = () => {
    return webProjects.map((project, idx) => {
      return (
        <div className={SubContent.box} key={project.id}>
          <div className={SubContent.Img}>
            <img src={project.imgURL} alt="projectImage" />
          </div>
          <div className={SubContent.links}>
            <a href={project.githubURL} rel="noopener noreferrer" target="_blank">GITHUB</a>
            <a href={project.liveURL} rel="noopener noreferrer" target="_blank">LIVE</a>
          </div>
          <h4>{project.name}</h4>
        </div>
      )
    })
  }


  const showElearningProjects = () => {
    return eProjects.map((project, idx) => {
      return (
        <div className={SubContent.box} key={project.id}>
          <div className={SubContent.Img}>
            <img src={project.imgURL} alt="projectImage" />
          </div>
          <div className={SubContent.links}>
            {/* <a href={project.githubURL} rel="noopener noreferrer" target="_blank">GITHUB</a> */}
            <a href={project.liveURL} rel="noopener noreferrer" target="_blank">LIVE</a>
          </div>
          <h4>{project.name}</h4>
        </div>
      )
    })
  }


  const showBehance = () => {
    return behance.map((project, idx) => {
      return (
        <div className={SubContent.box} key={project.id}>
          <div className={SubContent.Img}>
            <img src={project.imgURL} alt="projectImage" />
          </div>
          <div className={SubContent.links}>
            {/* <a href={project.githubURL} rel="noopener noreferrer" target="_blank">GITHUB</a> */}
            <a href={project.liveURL} rel="noopener noreferrer" target="_blank">LIVE</a>
          </div>
          <h4>{project.name}</h4>
        </div>
      )
    })
  }



  return (
    <section className={`${GlobalStyles.main}`}>
      <h1>My Projects</h1>
      <div className={GlobalStyles.inner}>
        <div className={SubContent.MainSub}>
          <div className={SubContent.row}>
            <h3>web projects</h3>
            <div>{showWebProjects()}</div>
          </div>
          <hr />
          <div className={SubContent.row}>
            <h3>e-learning projects</h3>
            <div>{showElearningProjects()}</div>
          </div>
          <hr />
          <div className={SubContent.row}>
            <h3>designing projects</h3>
            <div>{showBehance()}</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects