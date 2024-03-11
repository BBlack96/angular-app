describe("Stepper", ()=>{
  beforeEach(()=>{
    cy.visit("/pages/layout/stepper")
  })

  it("Check text and press 'Next' button", ()=>{
    const textSelector = "nb-stepper[class='horizontal'] h3[class='ng-star-inserted']"
    const nextButtonSelector = 'ngx-stepper > nb-card > nb-card-body > nb-stepper > div.step-content > button[type=\"submit\"]:nth-child(3)'
    cy.get(textSelector).should('have.text', 'Step content #1')
    cy.get(nextButtonSelector).click()
    cy.get(textSelector).should('have.text', 'Step content #2')
    cy.get(nextButtonSelector).click()
    cy.get(textSelector).should('have.text', 'Step content #3')
    cy.get(nextButtonSelector).click()
    cy.get(textSelector).should('have.text', 'Step content #4')

  })
})
