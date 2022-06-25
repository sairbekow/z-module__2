import Form from "../../utils/Form";

class ModalForm {
  form = document.querySelector('.modal-request__form')
  username = document.querySelector('#username-field')
  email = document.querySelector('#email-field')
  textarea = document.querySelector('#textarea-field')
  button = document.querySelector('.modal-request__btn')
  message = document.querySelector('.modal-request__message')

  initialize = () => {
    this.form && this.form.addEventListener('submit', (event) => {
      Form.submit(event, {
        message: this.message,
        button: {element: this.button, text: "Отправить"},
        fields: [this.username, this.email, this.textarea],
      })
    })
    this.username && this.username
      .addEventListener('input', () => Form.validate(this.username))
    this.email && this.email
      .addEventListener('input', () => Form.validate(this.email))
    this.textarea && this.textarea
      .addEventListener('input', () => Form.validate(this.textarea))
  }
}

export default ModalForm