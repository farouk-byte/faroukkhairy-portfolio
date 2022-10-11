import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import GlobalStyles from '../Styles/global.module.css';
import FormStyle from "./../Styles/FormStyle.module.css"

const Contact = () => {

  const inputElName = useRef(null)
  const inputElPhone = useRef(null)
  const inputElEmail = useRef(null)
  const inputElMsg = useRef(null)

  const form = useRef();

  const sendEmail = (e) => {
    if (inputElName.current.value === "" || inputElPhone.current.value === "" || inputElEmail.current.value === "" || inputElMsg.current.value === "") {
      e.preventDefault();
    } else {
      emailjs.sendForm('service_1jethf9', 'template_3244kjv', form.current, '9PtaEJNfj4Sgm8ePr')
        .then((result) => {
          console.log(result.text);
        }, (error) => {
          console.log(error.text);
        });
      console.log(inputElName.current.value);
    }
  };


  return (
    <section className={` ${GlobalStyles.main}`}>
      <h1>get in touch</h1>
      <div className={GlobalStyles.inner}>
        <form ref={form} onSubmit={sendEmail} className={FormStyle.form}>
          <table>
            <tbody>
              <tr>
                <td><label>Name</label></td>
                <td>
                  <input type="text" name="fullName" ref={inputElName} />
                </td>
              </tr>
              <tr>
                <td><label>E-mail</label></td>
                <td>
                  <input type="email" name="email" ref={inputElPhone} />
                </td>
              </tr>
              <tr>
                <td><label>Phone</label></td>
                <td>
                  <input type="text" name="phone" ref={inputElEmail} />
                </td>
              </tr>
              <tr>
                <td><label>Message</label></td>
                <td>
                  <textarea name="message" ref={inputElMsg} />
                </td>
              </tr>
              <tr>
                <td>
                  <input type="submit" value="Send" />
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
    </section>
  )
}

export default Contact