class Sidebar {
  sidebar = document.querySelector('.sidebar')
  openBtn = document.querySelector('.burger')
  closeBtn = document.querySelector('.sidebar__close-btn')

  initialize = () => {
    this.openBtn && this.openBtn.addEventListener('click', this.open)
    this.closeBtn && this.openBtn.addEventListener('click', this.close)
  }

  close = () => {
    this.sidebar.classList.remove('open-js')
    document.body.classList.remove('.open-sidebar-js')
  }

  open = () => {
    this.sidebar.classList.add('open-js')
    document.body.classList.add('.open-sidebar-js')
  }
}

export default Sidebar