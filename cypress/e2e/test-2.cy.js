describe("Dialog", ()=>{
  beforeEach(()=>{
    cy.visit("/pages/modal-overlays/dialog")
  })

  it("check modal windows is displayed", ()=>{
    const enterNameButtonLocator = "body > ngx-app:nth-child(2) > ngx-pages:nth-child(2) > ngx-one-column-layout:nth-child(1) > nb-layout:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > nb-layout-column:nth-child(1) > ngx-modal-overlays:nth-child(2) > ngx-dialog:nth-child(2) > div:nth-child(1) > div:nth-child(5) > nb-card:nth-child(1) > nb-card-body:nth-child(2) > button:nth-child(1)"
    const modalWindowLocator = "ngx-dialog-name-prompt[class='ng-star-inserted']"
    const modalWindowTitle = "ngx-dialog-name-prompt[class='ng-star-inserted'] nb-card nb-card-header"
    const inputLocator = "input[placeholder='Name']"
    const submitButtonLocator = ".status-success.appearance-filled.size-medium.shape-rectangle.nb-transition"
    const cancelButtonLocator = ".cancel.appearance-filled.size-medium.shape-rectangle.status-danger.nb-transition"
    cy.get(enterNameButtonLocator).click()
    cy.get(modalWindowLocator).should('be.visible')
    cy.get(modalWindowTitle).should('have.text', "Enter your name")
    cy.get(inputLocator).should("be.visible")
    cy.get(submitButtonLocator).should("be.visible")
    cy.get(cancelButtonLocator).should("be.visible")

  })
})
