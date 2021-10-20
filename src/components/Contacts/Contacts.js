import React from 'react';
import styles from './Contacts.module.css';
import linkedin from '../../images/linkedin.png';
import github from '../../images/github.png';
import phone from '../../images/phone.png';
import portfolio from '../../images/portfolio.png';
import email from '../../images/email.png';



class Contacts extends React.Component {
  state = {
    linkedln: 'https://www.linkedin.com/in/любов-мінакова-480701176/',
    gitHub: 'https://github.com/Liubovminakova',
    website: 'myfutureportfolio'
  }

render () {
  const {linkedln, gitHub, website }= this.state;
  return (
    <div className={styles.wrap}>
      <div className={styles.row}>
          <div className={styles.column__first}>
                <h1 className={styles.title}>Contact info:</h1>
                          <div>
                                <a href="mailto: l.minakova@email.cz" target='_blank' rel='noopener noreferrer' className={styles.contacts}><img src={email} alt="email icon" className={styles.vector_icon} />
                                l.minakova@email.cz </a>
                          </div>
                          <div>
                                <a href="tel: +420774129785" className={styles.contacts}><img src={phone} alt="phone icon" className={styles.vector_icon} /> +420 774-129-785</a>
                          </div>
                          <div>
                                <a href={website} className={styles.contacts}><img src={portfolio} alt="website icon" className={styles.vector_icon} />my portfolio is in progress...</a>
                          </div>
          </div>
          <div className={styles.column__second}>
            <div>
                  <a href={gitHub}>
                      <img src={github}
                      alt="githun icon"
                      className={styles.github} /></a>
                  <a href={linkedln}>
                      <img src={linkedin}
                      alt="linkedln icon"
                      className={styles.linkedln} /></a>
              </div>
          </div>
        </div>
    </div>

  )
}

}
export default Contacts;
