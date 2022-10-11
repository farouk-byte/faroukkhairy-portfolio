import React, { useState } from 'react'
import Modal from "../Components/Modal/Modal";
import BlogADDIE from "./Blogs/BlogADDIE"
import GlobalStyles from '../Styles/global.module.css';
import SubContent from './SubContent.module.css'

const Blogs = () => {

  const [showModal, setShowModal] = useState(false);

  const showModalHandeler = () => setShowModal(true)
  const hideModalHandeler = () => setShowModal(false)


  return (
    <section className={`${GlobalStyles.main}`}>
      <h1>blogs</h1>
      <div className={GlobalStyles.inner}>
        <div className={SubContent.MainSub}>
          <div className={SubContent.row}>
            <div>
              <div className={SubContent.box} style={{ cursor: "pointer" }} onClick={showModalHandeler}>
                <div className={SubContent.Img}>
                  <img src="./assessts/ADDIE.webp" alt="projectImage" />
                </div>
                <h4 style={{ marginTop: "20px" }}>ADDIE MODAL</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showModal ? <Modal closeModal={hideModalHandeler}>
        <BlogADDIE/>
      </Modal> : null}
    </section>
  )
}

export default Blogs