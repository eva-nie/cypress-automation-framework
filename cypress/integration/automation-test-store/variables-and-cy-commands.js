///<reference types="cypress" />

describe("Verifying variables, Cypress commands and Jquery commands", () => {
    it("Navigating to specific product pages", () => {
        cy.visit('https://automationteststore.com/')

        //The following will fail
        // const makeupLink = cy.get('a[href*="product/category&path="]').contains('Makeup')
        // const skincareLink = cy.get('a[href*="product/category&path="]').contains('Skincare')
        // makeupLink.click();
        // skincareLink.click();

        //The following will pass
        // const makeupLink = cy.get('a[href*="product/category&path="]').contains('Makeup')
        // makeupLink.click();
        // const skincareLink = cy.get('a[href*="product/category&path="]').contains('Skincare')
        // skincareLink.click();

//BOTH APPROACHES ARE NOT RECOMMENDED!!!!

//Recommended Approach
        cy.get('a[href*="product/category&path="]').contains('Makeup').click()
        cy.get('a[href*="product/category&path="]').contains('Skincare').click()
    });

    it("Navigating to specific product pages", () => {
        cy.visit('https://automationteststore.com/')
        cy.get('a[href*="product/category&path="]').contains('Makeup').click()
        
//Fails by Gianni, but works here
        const header = cy.get('h1 .maintext');

//Following code will fail
      //cy.log(header.text());

        //also good approach
        cy.get('h1 .maintext').then(($headerText) => {
            const headerText = $headerText.text()
            cy.log('Found header text: ' + headerText)
            expect(headerText).is.eq('Makeup')
        })
    });

    it.only("Validate properties of the Contact Us Page", () => {
        cy.visit('https://automationteststore.com/index.php?rt=content/contact')
        
        //Uses cypress commands and chaining
        cy.contains('#ContactUsFrm', 'Contact Us Form').find('#field_11').should('contain', 'First name')
        
        //JQuery Approach
        cy.contains('#ContactUsFrm', 'Contact Us Form').then(text => {
            const firstNameText = text.find('#field_11').text()//this line should extract the text from the lable
            expect(firstNameText).to.contain('First name')

                //Embedded commands (closure)   
                cy.get('#field_11').then(fnText => {
                    cy.log(fnText.text())// yields text
                    cy.log(fnText)  // yields element intself(code)
                })
        })

        
    });
})
