class Form {
  static submit = (e, obj) => {
    e.preventDefault()

    let isAllFieldsValid = true

    obj.fields.forEach(item => {
      if(!this.validate(item)) {
        isAllFieldsValid = false
      }
    })

    obj.message.style = 'opacity: 0'

    if (isAllFieldsValid) {
      obj.button.element.textContent = 'идет отправка...'
      obj.button.element.disabled = true
      obj.button.element.classList.add('disabled')

      setTimeout(() => {
        obj.button.element.textContent = obj.button.text
        obj.button.element.disabled = false
        obj.button.element.classList.remove('disabled')

        Form.clear(obj.fields)

        obj.message.style = 'opacity: 1'
      }, 2000)
    }
  }

  static validate = (field) => {
    if (field.value.trim().length === 0) {
      field.classList.add('wrong-field')
      field.nextElementSibling.style = 'opacity: 1'

      return false

    } else {
      field.classList.remove('wrong-field')
      field.nextElementSibling.style = 'opacity: 0'

      return true
    }
  }

  static clear = (fields) => {
    fields.forEach(item => {
      item.value = ''
      item.nextElementSibling.style = 'opacity: 0'
      item.classList.remove('wrong-field')
    })
  }
}

export default Form