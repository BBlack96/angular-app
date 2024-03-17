export default class Login{
  _url = "auth/login"
  _email_input_locator = "#input-email"
  _password_input_locator = "#input-password"
  _checkbox_locator = "span.custom-checkbox"
  _login_button_locator = "form > button"

  navigate(){
    cy.visit(this._url)
  }

  fillEmail(email){
    cy.get(this._email_input_locator).type(email)
  }

  fillPassword(password){
    cy.get(this._password_input_locator).type(password)
  }

  get checkbox(){
    return cy.get(this._checkbox_locator)
  }

  clickLoginButton(){
    cy.get(this._login_button_locator).click()
  }

}
