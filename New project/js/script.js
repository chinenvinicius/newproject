const menutoggle = document.querySelector('#mobile-menu');
const menulinks = document.querySelector('.navbar');


const mobilemenuAactive = () =>{
    menutoggle.classList.toggle('is-active');
    menulinks.classList.toggle('active')
}

menutoggle.addEventListener('click', mobilemenuAactive)


function initscrollanimation () {
const sections = document.querySelectorAll('.js-scroll');

if(sections.length){
    const windowhalf = window.innerHeight * 0.6;

    function animatescroll(){
      sections.forEach((section) =>{
        const sectionTop = section.getBoundingClientRect().top;
        const  sectionvisible = (sectionTop - windowhalf) < 0
        if(sectionvisible){
            section.classList.add('scroll-ativo');
        }else{
            section.classList.remove('scroll-ativo');
        }
      }) ;
    }
    animatescroll();
    
    window.addEventListener('scroll', animatescroll);
}

}

initscrollanimation();


const backbutton = document.querySelector('.back-to-top');

window.addEventListener('scroll', function(){
   backbutton.classList.toggle("fade-in", window.scrollY < 300)
});

backbutton.addEventListener('click', function(){
  
   window.scrollTo({
     top:0,
     left:0,
     behavior:'smooth'

   });
});

