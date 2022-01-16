///<reference types="cypress" />

describe("TestContact Us form via Automation Test Store", () => {
    it("Should be able to submit a successful submission via Contact Us form", () => {
      cy.visit("https://automationteststore.com/")
      cy.get("a[href$='contact']").click().then(function(linkText) {
        cy.log('Clicked on link using text: ' + linkText.text())
      })
      // cy.xpath("//a[contains(@href, 'contact')]").click()
      cy.get('#ContactUsFrm_first_name').type('Joe')
      cy.get('#ContactUsFrm_email').type('joe@gmail.com')
      cy.get('#ContactUsFrm_email').should('have.attr', 'name', 'email')
      cy.get('#ContactUsFrm_enquiry').type('comment')
      cy.get("button[title='Submit']").click()
      cy.get('.mb40 > :nth-child(3)').should('have.text', 'Your enquiry has been successfully sent to the store owner!')
      cy.log('Tests has completed');
    })
})