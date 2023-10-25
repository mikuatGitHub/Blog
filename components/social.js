import styles from 'styles/social.module.css'

// アイコンライブラリFontAwesomeのコアとパッケージをimport
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faXTwitter,
  faFacebookF,
  faGithub,
} from '@fortawesome/free-brands-svg-icons'


export default function Social({iconSize= 'initial'}) {
  return (
    <ul className={styles.list} style={{'--icon-size': iconSize}}>
      <li>
        <a href="https://github.com/">
          <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
          <span className='sr-only'>github</span>
        </a>
      </li>
      <li>
        <a href="https://twitter.com/">
          <FontAwesomeIcon icon={faXTwitter}></FontAwesomeIcon>
          <span className='sr-only'>twitter</span>
        </a>
      </li>
      <li>
        <a href="https://facebook.com/">
          <FontAwesomeIcon icon={faFacebookF}></FontAwesomeIcon>
          <span className='sr-only'>facebook</span>
        </a>
      </li>
    </ul>
  )
}
