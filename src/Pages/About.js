import React from 'react'
import AboutStyles from './About.module.css';
import GlobalStyles from '../Styles/global.module.css';

const About = () => {
  return (
    <section className={`${AboutStyles.about} ${GlobalStyles.main}`}>
      <h1>about me</h1>
      <div className={GlobalStyles.inner}>
        <div className={AboutStyles.summry}>
          <p>Hi! My name is Farouk Khairy, I’m a student at faculty of Specific Education, Organized & hard-working looking to join an educational organization as a computer science teacher. Looking to take advantage of my skills in Web development, Instructional designing and Special Education to help disabled students with their education and life style.</p>
          <a href="https://drive.google.com/file/d/1DrrBgdiTjIBZnGQlVPymukxaXRP-5h3p/view?usp=sharing" rel="noopener noreferrer" target="_blank">Download Resume</a>
        </div>
        <hr />
        <div className={AboutStyles.skills}>
          <h2>skills</h2>
          <div className={AboutStyles.skillsWrapper}>
            <div className={AboutStyles.skillBox}>
              <h5>HTML</h5>
              <div className={AboutStyles.progressBar}>
                <div className={AboutStyles.progressDoneHTML}>
                  95%
                </div>
              </div>
            </div>
            <div className={AboutStyles.skillBox}>
              <h5>CSS</h5>
              <div className={AboutStyles.progressBar}>
                <div className={AboutStyles.progressDoneCSS}>
                  95%
                </div>
              </div>
            </div>
            <div className={AboutStyles.skillBox}>
              <h5>Java Script</h5>
              <div className={AboutStyles.progressBar}>
                <div className={AboutStyles.progressDoneJs}>
                  80%
                </div>
              </div>
            </div>
            <div className={AboutStyles.skillBox}>
              <h5>React JS</h5>
              <div className={AboutStyles.progressBar}>
                <div className={AboutStyles.progressDoneRj}>
                  60%
                </div>
              </div>
            </div>
            <div className={AboutStyles.skillBox}>
              <h5>JQuary</h5>
              <div className={AboutStyles.progressBar}>
                <div className={AboutStyles.progressDoneJq}>
                  60%
                </div>
              </div>
            </div>
            <div className={AboutStyles.skillBox}>
              <h5>BootStrap</h5>
              <div className={AboutStyles.progressBar}>
                <div className={AboutStyles.progressDoneBs}>
                  50%
                </div>
              </div>
            </div>
            <div className={AboutStyles.skillBox}>
              <h5>Photoshop</h5>
              <div className={AboutStyles.progressBar}>
                <div className={AboutStyles.progressDonePs}>
                  95%
                </div>
              </div>
            </div>
            <div className={AboutStyles.skillBox}>
              <h5>Illustrator</h5>
              <div className={AboutStyles.progressBar}>
                <div className={AboutStyles.progressDoneAi}>
                  95%%
                </div>
              </div>
            </div>
            <div className={AboutStyles.skillBox}>
              <h5>STORYLINE</h5>
              <div className={AboutStyles.progressBar}>
                <div className={AboutStyles.progressDoneSl}>
                  70%
                </div>
              </div>
            </div>
            <div className={AboutStyles.skillBox}>
              <h5>STORYBORDING</h5>
              <div className={AboutStyles.progressBar}>
                <div className={AboutStyles.progressDoneSb}>
                  70%
                </div>
              </div>
            </div>
            <div className={AboutStyles.skillBox}>
              <h5>FLIPPDF</h5>
              <div className={AboutStyles.progressBar}>
                <div className={AboutStyles.progressDoneFp}>
                  80%
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr/>
        <div className={AboutStyles.timeLine}>
          <h2>timeline</h2>
          <div className={AboutStyles.timeLineWrapper}>
            <div className={AboutStyles.timeLineBox}>
              <p>Frontend Developer <span>- TEACHING ACADEMY</span></p>
              <p>2022</p>
              <p>Worked with them to make TEACHING ACADEMY official website, built with React and bootstrap for front-end, taking into account the accessibility, semantics, SEO and performance.</p>
            </div>
            <div className={AboutStyles.timeLineBox}>
              <p>Head Of Web Committee <span>- TEACHING ACADEMY</span></p>
              <p>2022</p>
              <ul>
                <li>Lead A Team of Developers and Train Them.</li>
                <li>Review Tasks and Give Feedback.</li>
                <li>Training Them on Teaching and Supporting in Workshops and Events.</li>
              </ul>
            </div>
            <div className={AboutStyles.timeLineBox}>
              <p>CS INSTRACTOR <span>- FACULTY OF SP EDUCATION AIN-SHAMS UNIVERSITY</span></p>
              <p>2021</p>
              <p>Explaining to the students of Specific Education the fundamental of web developing using HTML, CSS and JavaScript.</p>
            </div>
            <div className={AboutStyles.timeLineBox}>
              <p>Frontend Developer <span>- MECA</span></p>
              <p>2020 - 2021</p>
              <p>Worked with them to make MECA official website, built with javascript for front-end, taking into account the accessibility, semantics, SEO and performance.</p>
            </div>
            <div className={AboutStyles.timeLineBox}>
              <p>Computer Teacher <span>- AL AMAL SCHOOL FOR THE DEAF</span></p>
              <p>2021 - 2022</p>
              <p>Teaching a computer for deaf and dumb students through appropriate means.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About