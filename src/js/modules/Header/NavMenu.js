class NavMenu {
  menuLinks = document.querySelectorAll('.menu__link')

  initialize = () => {
    this.menuLinks.forEach((item) => {
      console.log(window.location.href, item.href)
      if (window.location.href === item.href) {
        item.classList.add('menu__link--active')
      }
    })
  }
}

export default NavMenu