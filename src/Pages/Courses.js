import React, { useState } from 'react'
import Modal from '../Components/Modal/Modal';
import Carousel from 'react-bootstrap/Carousel';
import ReactPlayer from 'react-player/youtube'
import GlobalStyles from '../Styles/global.module.css';
import SubContent from './SubContent.module.css'

const Courses = () => {

  const [showModal, setShowModal] = useState(false);

  const [videoId, setVideoId] = useState("pUaxpnkY0XA");
  const [videoProps] = useState([
    { videoId: "pUaxpnkY0XA", name: "farouk" },
    { videoId: "z4tsBrxaNXI", name: "taha" },
    { videoId: "7f8kWA-yDnU", name: "mazen" },
  ])


  const showModalHandeler = () => setShowModal(true)
  const hideModalHandeler = () => setShowModal(false)
  const setId = id => setVideoId(id)

  return (
    <section className={`${GlobalStyles.main}`}>
      <h1>courses</h1>
      <div className={GlobalStyles.inner}>
        <div className={SubContent.MainSub}>
          <div className={SubContent.row}>
            <div>
              <div className={SubContent.box} style={{ cursor: "pointer" }} onClick={showModalHandeler}>
                <div className={SubContent.Img}>
                  <img src="./assessts/js.webp" alt="projectImage" />
                </div>
                <h4 style={{marginTop:"20px"}}>Java Script</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showModal ? <Modal closeModal={hideModalHandeler} >
        <Carousel style={{
          width: "50%",
          margin: "auto",
          textAlign: "center"
        }} interval={null} variant='dark' indicators={false}>
          {videoProps.map((video, idx) => {
            return (<Carousel.Item key={video.videoId}>
              <li style={{ display: "block", cursor: "pointer", backgroundColor: "rgba(0,0,0,0.5)", width: "50%", margin: "auto", borderRadius: "5px" }} onClick={() => setId(video.videoId)}>{video.name}</li>
            </Carousel.Item>)
          })}
        </Carousel>
        <div style={{
          position: "relative", paddingTop: "40%", marginTop: "20px"
        }}>
          <ReactPlayer controls={true} width="100%" height="100%" style={{ position: "absolute", top: "0", left: "0" }} url={`https://www.youtube.com/watch?v=${videoId}`} />
        </div>
      </Modal> : null}
    </section>
  )
}

export default Courses