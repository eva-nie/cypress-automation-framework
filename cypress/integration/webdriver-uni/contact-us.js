///<reference types="cypress" />

describe("TestContact Us form via WebdriverUni", () => {
    it("Should be able to submit a successful submission via Contact Us form", () => {
      cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html")
      cy.document().should('have.property', 'charset').and('eq', 'UTF-8')
      cy.title().should('include', 'WebDriver | Contact')
      cy.url().should('include', 'contactus')
      cy.get('[name="first_name"]').type('Joe')
      cy.get('[name="last_name"]').type('Doe')
      cy.get('[name="email"]').type('example@example.com')
      cy.get('textarea.feedback-input').type('Just a comment')
      cy.get('[type="submit"]').click()
      cy.get('h1').should('have.text', 'Thank You for your Message!')
})

    it('Should not be able to submit a successful submission via contact us form as all fialds are required', () => {
    cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html")
    cy.get('[name="first_name"]').type('Joe')
    cy.get('[name="last_name"]').type('Doe')
    cy.get('textarea.feedback-input').type('Just a comment')
    cy.get('[type="submit"]').click()
    cy.get('body').contains('Error: all fields are required')
    })
})
