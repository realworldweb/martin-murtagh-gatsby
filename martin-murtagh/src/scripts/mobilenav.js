class MobileNav{
 constructor(){
 this.toggler = document.getElementById('headerToggle')
 console.log(this.toggler)
 this.toggleIcon = this.toggler.children[0]
 this.togglerArea = this.toggler.getAttribute('data-target')
 this.togglerState = this.toggler.getAttribute('aria-expanded')
 this.load = true
 this.events()

 
 }
events(){

this.toggler.addEventListener('click', e =>  this.run(e))

} 
 
 
run(){

 const head = this.togglerArea
 const childEl = document.querySelector(head).children
 
 for(const el of childEl){//set intial values for all children
 if( this.load === true){
  el.style.transition = 'opacity 2s'
  el.style.opacity = 0
  
 }else{
  el.style.transition = 'opacity .5s'
  el.style.opacity = 0
 
 }
 }
 if(this.togglerState === 'false'){
  
  
  this.togglerState = 'true'
  this.toggleIcon.classList.add('headerMenuIconCloseX')
  this.load = false
  document.getElementById('header').classList.remove('headerNavClosed')//open header
  
  

  setTimeout(function(){//reveal area nav
  document.querySelector(head).classList.remove('d-none') 
 document.querySelector(head).classList.add('d-flex') 
 }, 150)
  
 setTimeout(function(){//reveal area nav
  
  for(const el of childEl){//reveal children 
  el.style.opacity = 1
  }
  }, 250)
  
  

  
  
  
 }else{
  this.togglerState = 'false'
  this.load = true
  this.toggleIcon.classList.remove('headerMenuIconCloseX')
    for(const el of childEl){//hide children
 el.style.opacity = 0
    }
  setTimeout(function(){
 document.getElementById('header').classList.add('headerNavClosed')//close header
  }, 100)
  
  setTimeout(function(){//hide area nav
  document.querySelector(head).classList.add('d-none')
  document.querySelector(head).classList.remove('d-flex')
  }, 600)

}
}
}

export default MobileNav;