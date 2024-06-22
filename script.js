let menubar = document.querySelector('#menu-bars')
let mynav = document.querySelector('.navbar')



menubar.onclick = () =>{
  menubar.classList.toggle('fa-times')
  mynav.classList.toggle('active')
}


const sr = ScrollReveal ({
  distance : '45px',
  duration : 2700,
  reset : true,
})

sr.reveal('.myimage',{ delay:350, origin:'left' })
  sr.reveal('.home .content',{ delay:350, origin:'right' })
sr.reveal('.speciality',{ delay:350, origin:'top' })
sr.reveal('.popular',{ delay:350, origin:'bottom' })
sr.reveal('.gallery',{ delay:350, origin:'bottom' })
sr.reveal('.review .box',{ delay:350, origin:'top' })
sr.reveal('.myform',{ delay:350, origin:'bottom' })

// let menu = document.querySelector('#menu-bar');
// let navbar = document.querySelector('.navbar');

// menu.onclick = () =>{

//   menu.classList.toggle('fa-times');
//   navbar.classList.toggle('active');

// }

// window.onscroll = () =>{

//   menu.classList.remove('fa-times');
//   navbar.classList.remove('active');

//   if(window.scrollY > 60){
//     document.querySelector('#scroll-top').classList.add('active');
//   }else{
//     document.querySelector('#scroll-top').classList.remove('active');
//   }

// }

// function loader(){
//   document.querySelector('.loader-container').classList.add('fade-out');
// }

// function fadeOut(){
//   setInterval(loader, 3000);
// }

// window.onload = fadeOut();