import menu from './menu.json'
import menuItemTemplate from './dish-template.hbs'
import './styles.css';

const refs ={
  menuItems: document.querySelector('ul.js-menu'),
  swichControl: document.querySelector('input.js-switch-input')
}

buildMenuItems(menu)
function buildMenuItems (menu){
  const markup = menu.map(dish => menuItemTemplate(dish)).join('')
  refs.menuItems.insertAdjacentHTML("beforeend", markup)
}


const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};


document.addEventListener('DOMContentLoaded', getThemeFromLocalStorage)
refs.swichControl.addEventListener('change', changeTheme)

function getThemeFromLocalStorage () {
  if(Theme.LIGHT === JSON.parse(localStorage.getItem('theme'))){
    onLightTheme()
  }
  if(Theme.DARK === JSON.parse(localStorage.getItem('theme'))){
    onDarkTheme()
    refs.swichControl.checked = true
  }
}


function changeTheme (e){
  if(!e.target.checked ){
    onLightTheme()
    // console.log(Theme.LIGHT)
  } 
  if(e.target.checked){
    onDarkTheme()
    // console.log(Theme.DARK)
  }
}
function onLightTheme (){
  document.body.classList.remove(Theme.DARK)
  document.body.classList.add(Theme.LIGHT)
  localStorage.removeItem('theme', JSON.stringify(Theme.DARK))
  localStorage.setItem('theme', JSON.stringify(Theme.LIGHT))
}
function onDarkTheme (){
  document.body.classList.remove(Theme.LIGHT)
  document.body.classList.add(Theme.DARK)
  localStorage.removeItem('theme', JSON.stringify(Theme.LIGHT))
  localStorage.setItem('theme', JSON.stringify(Theme.DARK))

}


