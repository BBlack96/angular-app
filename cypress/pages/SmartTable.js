export default class SmartTable{
  _url = "pages/tables/smart-table"
  _id_input_locator = "input[ng-reflect-name='id']"
  _name_input_locator = "input[ng-reflect-name='firstName']"
  _surname_input_locator = "input[ng-reflect-name='lastName']"
  _email_input_locator = "input[ng-reflect-name='email']"
  _username_input_locator = "input[ng-reflect-name='username']"
  _age_input_locator = "input[ng-reflect-name='age']"

  navigate(){
    cy.visit(this._url)
  }

  fillId(id){
    cy.get(this._id_input_locator).type(id)
  }

  editId(newID){
    cy.get(this._id_input_locator).clear().type(newID)
  }


  fillFirstName(first_name){
    cy.get(this._name_input_locator).type(first_name)
  }

  editFirstName(new_first_name){
    cy.get(this._name_input_locator).clear().type(new_first_name)
  }

  fillLastName(last_name){
    cy.get(this._surname_input_locator).type(last_name)
  }

  editLastName(new_last_name){
    cy.get(this._surname_input_locator).clear().type(new_last_name)
  }

  fillUsername(username){
    cy.get(this._username_input_locator).type(username)
  }

  editUsername(new_username){
    cy.get(this._username_input_locator).clear().type(new_username)
  }

  fillEmail(email){
    cy.get(this._email_input_locator).type(email)
  }

  editEmail(newEmail){
    cy.get(this._email_input_locator).clear().type(newEmail)
  }

  fillAge(age){
    cy.get(this._age_input_locator).type(age)
  }

  editAge(new_age){
    cy.get(this._age_input_locator).type(new_age)
  }

  updateUser(new_id, new_first_name, new_last_name, new_username, new_email, new_age){
    cy.get(this._id_input_locator).clear().type(new_id)
    cy.get(this._name_input_locator).clear().type(new_first_name)
    cy.get(this._surname_input_locator).clear().type(new_last_name)
    cy.get(this._username_input_locator).clear().type(new_username)
    cy.get(this._email_input_locator).clear().type(new_email)
    cy.get(this._age_input_locator).clear().type(new_age)
  }

  clickCheckmark(){
    cy.get(".nb-checkmark").click()
  }

  clickAddNewUserButton(){
    cy.get(".ng2-smart-action.ng2-smart-action-add-add.ng-star-inserted").click()
  }

  isUserExist(value){
    cy.get("nb-card-body").within(() => {
      cy.contains('tr', value).should('exist')
    })
  }

  get editFirstUserButton(){
    return cy.get('.nb-edit').eq(0)
  }

}
