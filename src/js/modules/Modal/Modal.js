import Form from "../../utils/Form";

class Modal {
  modal = document.querySelector('.overlay')
  openBtn = document.querySelector('.consultation__btn')
  closeBtn = document.querySelector('.modal-request__close-btn')

  initialize = () => {
    this.openBtn && this.openBtn.addEventListener('click', this.open)
    this.closeBtn && this.closeBtn.addEventListener('click', this.close)
  }

  close = () => {
    const username = document.querySelector('#username-field')
    const email = document.querySelector('#email-field')
    const textarea = document.querySelector('#textarea-field')

    Form.clear([username, email, textarea])

    this.modal.style = 'display: none'
    document.body.classList.remove('open-sidebar-js')
  }

  open = () => {
    this.modal.style = 'display: block'
    document.body.classList.add('open-sidebar-js')
  }
}

export default Modal