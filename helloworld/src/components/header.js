import React,{useState} from "react"
import HeaderStyles from "./header.module.css"




export default function Header(){//header scripts
 const [ toggle, setToggle] = useState("position-relative d-lg-none align-items-center float-right "+HeaderStyles.headerToggle)
 const [ nav, setNav] = useState("navbar navbar-expand-lg navbar-dark "+HeaderStyles.header+" "+HeaderStyles.headerNavClosed)
 const [ navContent, setNavContent] = useState("d-none text-right justify-content-around align-items-right align-items-lg-center pt-5 pt-lg-0 ml-n5 ml-lg-0 mr-5 flex-column flex-lg-row d-lg-flex")
 
 function mobileNav(e){
  console.log(e.currentTarget)
  let opening = true
  let opened = e.currentTarget.getAttribute('aria-expanded')
  const nav =  e.currentTarget.nextSibling.nextSibling.children
  const head = e.currentTarget.parentElement
  console.log(head)
  if( opening === true){// apply opening transitions
 for(const el of nav){//set base style for all li's 
  el.style.opacity = 0
  el.style.transition = 'opacity 1.5s'
  }
 
  }else{//set base style for all li's 
   
   for(const el of nav){//reveal children 
  el.style.opacity = 0
  el.style.transition = 'opacity 0.5s'
  }
   
  }
  
  

  
  if (opened === 'false'){
  setToggle("position-relative d-lg-none align-items-center float-right "+HeaderStyles.headerToggle+' '+HeaderStyles.headerMenuIconClosedX)
  setNav("navbar navbar-expand-lg navbar-dark "+HeaderStyles.header)
 
  e.currentTarget.setAttribute('aria-expanded', 'true')
  
   
    setTimeout(function(){//reveal area nav
  for(const el of nav){//reveal children 
  el.style.opacity = 1
  }
  }, 250)
 
  
 setTimeout(function(){//reveal area nav
   setNavContent("d-flex navClosed text-right justify-content-around align-items-right align-items-lg-center pt-5 pt-lg-0 ml-n5 ml-lg-0 mr-5 flex-column flex-lg-row d-lg-flex")
  },150)
  }else{
   e.currentTarget.setAttribute('aria-expanded', 'false')
   opening = false
   
    for(const el of nav){//hide children
 el.style.opacity = 0
    }
  setTimeout(function(){
  setToggle("position-relative d-lg-none align-items-center float-right "+HeaderStyles.headerToggle)
  setNav("navbar navbar-expand-lg navbar-dark "+HeaderStyles.header+" "+HeaderStyles.headerNavClosed)
  setNavContent("d-none text-right justify-content-around align-items-right align-items-lg-center pt-5 pt-lg-0 ml-n5 ml-lg-0 mr-5 flex-column flex-lg-row d-lg-flex")
  }, 300)
  
  
   
  }
  
  
 }

return (

 <nav id="header" className={nav}>
  <div className="container-fluid mx-xl-5">
  <a className={"navbar-brand txt-black shadow-large "+HeaderStyles.headerTitle} href="/"><strong><em><span className="orange-text">M</span>ARTIN<span className="orange-text">M</span>URTAGH.COM</em></strong></a>
  <div className={"position-relative "+HeaderStyles.headerNavMain}>
   <button id="headerToggle" onClick={e => mobileNav(e)} className={toggle} type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
     <div className={ "position-relative d-block mx-auto "+HeaderStyles.headerMenuIcon }>
	
	
	  <div className={HeaderStyles.headerMenuIconMiddle}></div>
	
	
	
	  </div>
  </button>  
  <button className={"btn d-none d-sm-inline position-relative float-right d-lg-none "+HeaderStyles.headerQuote+' '+HeaderStyles.headerQuotePerm}><span className="mx-2"><i className="far fa-file-alt"></i></span>Consultation</button>
 

  <div className={navContent} id="navbarSupportedContent">
    <ul className={"navbar-nav "+HeaderStyles.headerNavLinks}>
      <li className="nav-item">
        <a className="nav-link active" href="/">HOME</a>
      </li>
      <li className="nav-item mx-lg-2 mx-xl-5">
       <a className="nav-link" href="projects.html">SOCIAL STRATEGY<i className="fas fa-caret-down mx-2"></i></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="certs.html">SERVICES<i className="fas fa-caret-down mx-2"></i></a>
      </li>
    </ul>
    <button className={"btn mx-auto mx-lg-2 d-block d-lg-inline float-lg-right "+HeaderStyles.headerQuote}><span className="mx-2"><i className="far fa-file-alt"></i></span>Consultation</button>
    </div>
    </div>
  </div>
 </nav>


)

}