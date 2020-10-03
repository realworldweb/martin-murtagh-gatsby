import React from 'react'
import SocialStrategy from '../icons/social-strategy'
import '../css/call-to-action.css'


export default function indexMain(){

return ( 
 <div className="d-flex d-block position-relative call-to-action">
 <picture>
 <source sizes="1500px" srcSet="../images/growth-hacking-xl.webp 1800w" />
 <source sizes="1000px" srcSet="../images/growth-hacking-lg.webp 1200w" />
 <source sizes="700px" srcSet="../images/growth-hacking-md.webp 850w" />
 <img sizes="500px" srcSet="../images/growth-hacking-sm.webp 650w" src="../images/growth-hacking-sm.webp" alt="growth-hacking-img"/>
 </picture>
  <div className="col-7 call-to-action__tagline">
  <p>
  &ldquo; were technicolor for your social startegy &rdquo;
  </p>
  </div>
 </div> 
  )

}