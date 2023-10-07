import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons'
 export const SocialButton = () => {
  return (
    <div>
        <h2>Crea una cuenta</h2>
        <FontAwesomeIcon icon={faFacebook} />
        <FontAwesomeIcon icon={faGithub} />
        <FontAwesomeIcon icon={faLinkedinIn} />
        <h5>O usa tu email para registrarte</h5>
    </div>
  )
}
