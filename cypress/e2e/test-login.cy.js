import Login from "../pages/Login";

describe("Login", () => {
  const login = new Login()
  beforeEach(() => {
    login.navigate()
  })

  it("success login", () => {
    login.fillEmail("test@gmail.com")
    login.fillPassword("qweqwe")
    login.checkbox.click()
    login.clickLoginButton()
    cy.wait(3000)
    cy.url().should('include', '/dashboard')
  })

})
