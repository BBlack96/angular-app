describe("Stepper", ()=>{
  beforeEach(()=>{
    cy.visit("/pages/layout/stepper")
  })

  it("Check text and press 'Next' button", ()=>{
    const textSelector = "nb-stepper[class='horizontal'] h3[class='ng-star-inserted']"
    const nextButtonSelector = "body > ngx-app:nth-child(2) > ngx-pages:nth-child(2) > ngx-one-column-layout:nth-child(1) > nb-layout:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > nb-layout-column:nth-child(1) > ngx-components:nth-child(2) > ngx-stepper:nth-child(2) > nb-card:nth-child(1) > nb-card-body:nth-child(1) > nb-stepper:nth-child(1) > div:nth-child(2) > button:nth-child(3)"
    cy.get(textSelector).should('have.text', 'Step content #1')
    cy.get(nextButtonSelector).click()
    cy.get(textSelector).should('have.text', 'Step content #2')
    cy.get(nextButtonSelector).click()
    cy.get(textSelector).should('have.text', 'Step content #3')
    cy.get(nextButtonSelector).click()
    cy.get(textSelector).should('have.text', 'Step content #4')

  })
})
