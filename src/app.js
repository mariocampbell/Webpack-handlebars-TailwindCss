import Styles from './sass/styles.scss'
import page from 'page'
import gsap from 'gsap'

document.addEventListener('DOMContentLoaded', () => {
    console.log(process.env.HELLO_WORLD)
    
    const home = require('./views/pages/home.hbs'),
          app = document.querySelector('#app')
    
    page('*', function(ctx, next){
        if (ctx.init) {
            //Appear Pages
            gsap.from(app, { duration: 1.2, autoAlpha: 0, ease: 'power2.in', onStart: () => next() })
        } else {
            //Transitions between pages
            gsap.timeline()
            .to(app, { duration: .4, autoAlpha: 0, y: 50, scale: 0.97, transformOrigin: "left top", ease: 'power2.out' })
            .to(app, { duration: .4, autoAlpha: 1, y: 0, scale: 1, transformOrigin: "left top", ease: 'power2.out', delay: .2, onStart: () => next() })
        }
    })
    
    page('/', () => {
        app.innerHTML = home({})
    })

    page()
    
})
