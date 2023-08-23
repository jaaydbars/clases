const constants = require('../support/constants');

describe('Esperas', () => {

    beforeEach('BeforeEach',() => {
        cy.log('Before Each');
        cy.visit('');
        cy.get('#registertoggle').dblclick()
        cy.get('div[role="group"]').children('[name="user"]').type(`pushingit`);
        cy.get('div[role="group"]').children('[name="pass"]').type('123456!');
        cy.get('#submitForm').click();
        cy.get('#waitslink').click();
        cy.get('[id="wait"]').dblclick();
    })


    it('Esperas con Wait', () => {
        cy.get('#message').should('have.text', 'You have waited for ten seconds, CONGRATULATIONS');
    })

    it('Esperas con tiimeout', () => {
        cy.get('#message', {timeout:constants.TIMEOUT}).should('have.text', 'You have waited for ten seconds, CONGRATULATIONS');
    })
    
    it('Esperas con tiimeout', () => {
        cy.get('#message', {timeout: constants.TIMEOUT}).should('have.text', 'You are a man of patience and have waited fifteen seconds');
    })
})