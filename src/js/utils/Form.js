class Form {
  static isAllFieldsValid = true

  static submit = (e, obj) => {
    e.preventDefault()

    obj.fields.forEach(item => {
      this.validate(item)
    })

    obj.message.style = 'opacity: 0'

    if (this.isAllFieldsValid) {
      obj.button.textContent = 'идет отправка...'
      obj.button.disabled = true
      obj.button.classList.add('disabled')

      setTimeout(() => {
        obj.button.textContent = button.text
        obj.button.disabled = false
        obj.button.classList.remove('disabled')

        Form.clear(obj.fields)

        obj.message.style = 'opacity: 1'
      }, 2000)
    }
  }

  static validate = (field) => {
    if (field) {
      if (field.value.trim().length === 0) {
        field.classList.add('wrong-field')
        field.nextElementSibling.style = 'opacity: 1'

        this.isAllFieldsValid = false

      } else {
        field.classList.remove('wrong-field')
        field.nextElementSibling.style = 'opacity: 0'

        this.isAllFieldsValid = true
      }
    }
  }

  static clear = (fields) => {
    if (fields) {
      fields.forEach(item => {
        item.value = ''
        item.nextElementSibling.style = 'opacity: 0'
        item.classList.remove('wrong-field')
      })
    }
  }
}

export default Form