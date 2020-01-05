import Styles from './sass/styles.scss'
import page from 'page'


document.addEventListener('DOMContentLoaded', () => {
    console.log(process.env.HELLO_WORLD)
    
    const home = require('./views/pages/home.hbs')
    
    page('/', () => {
        document.querySelector('#app').innerHTML = home({})
    })

    page()
    
})
