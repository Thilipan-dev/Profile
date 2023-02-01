/* ----- MENU SCROLL ----*/
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }

}
showMenu('nav-toggle', 'nav-menu')

/* ----REMOVE MENU MOBILE-----*/
const navLink = document.querySelectorAll('.nav_link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}

navLink.forEach(n => n.addEventListener('click', linkAction))


/* -----SCROLL ACTION ACTIVE LINK-----*/
const sections = document.querySelectorAll('section[id]')

window.addEventListener('scroll', scrollActive)

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')


        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav_menu a[href*=' +  sectionId + ']').classList.add('active')
        }else{
            document.querySelector('.nav_menu a[href*=' +  sectionId + ']').classList.remove('active')


        }
    })
}


/* ===== SCROLL REVEAL ANIMATION ==== */
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true


})

/* ===== SCROLL HOME ==== */
sr.reveal('.home_title', {})
sr.reveal('.home_scroll', {delay: 200})
sr.reveal('.home_img', {origin: 'right', delay: 400})





/* ===== SCROLL ABOUT ==== */




/* ===== SCROLL SKILLS ==== */




/* ======== SCROLL CONTACT ========= */



