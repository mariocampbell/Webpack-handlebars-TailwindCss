import Styles from './sass/styles.scss'
import page from 'page'
import gsap from 'gsap'

document.addEventListener('DOMContentLoaded', () => {
    console.log(process.env.HELLO_WORLD)
    
    const home = require('./views/pages/home.hbs'),
          app = document.querySelector('#app')
    
    page('*', function(ctx, next){
        if (ctx.init) {
            // load Pages
            gsap.from(app, { duration: 1.2, autoAlpha: 0, ease: 'power2.in', onStart: () => next() })
        } else {
            // transitions between pages
            gsap.timeline()
            .to(app, { duration: .4, autoAlpha: 0, scale: 0.97, transformOrigin: "center bottom", ease: 'power2.out' })
            .to(app, { duration: .4, autoAlpha: 1, scale: 1, delay: 0.2, onStart: () => next() })
        }
    })
    
    page('/', () => {
        app.innerHTML = home({})
    })
    
    page('*', () => {
        app.innerHTML = '<h1 class="font-light text-3xl uppercase mt-16 ml-24" >Página no encontrada</h1>'
    })

    page()
    
})
