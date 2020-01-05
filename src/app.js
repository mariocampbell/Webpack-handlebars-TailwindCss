import Styles from './sass/styles.scss'
import page from 'page'


document.addEventListener('DOMContentLoaded', () => {
    console.log(process.env.HELLO_WORLD)
    
    const home = require('./views/pages/home.hbs'),
          app = document.querySelector('#app')
    
    page('*', function(ctx, next){
        if (ctx.init) {
            next();
        } else {
            app.classList.add('transition');
            setTimeout(function(){
                app.classList.remove('transition');
                next();
            }, 300);
        }
    })
    
    page('/', () => {
        app.innerHTML = home({})
    })

    page()
    
})
