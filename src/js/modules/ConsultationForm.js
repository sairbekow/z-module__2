import Form from "../utils/Form";

class ConsultationForm {
  form = document.querySelector('.form')
  username = document.querySelector('.form__username')
  email = document.querySelector('.form__email')
  button = document.querySelector('.form__btn')
  message = document.querySelector('.form__message')

  initialize = () => {
    this.form && this.form
      .addEventListener('submit', (event) => {
        Form.submit(event, {
          message: this.message,
          button: {element: this.button, text: "е "},
          fields: [this.username, this.email]
        })
      })
    this.username && this.username
      .addEventListener('input', () => Form.validate(this.username))
    this.email && this.email
      .addEventListener('input', () => Form.validate(this.email))
  }
}

export default ConsultationForm