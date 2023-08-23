/// <reference types="cypress" /> 

describe('Primer test con cypress', () => {

    const numeroRandom = Math.floor(Math.random() * 1000)
    let nombre = `Comision${numeroRandom}`;
    
    it('Deberia registrar un usuario satisfactoriamente', () => {
        cy.visit('');
        cy.get('#user').type('Cosssmisdsiosns955553');
        cy.get('#pass').type('123456!');
        cy.get('[Value="Male"]').check( {force: true});
        cy.get('#day').select("10"); //value
        cy.get('#month').select("April"); //texto visible
        cy.get('#year').select(50); //posicion del index
        cy.get('#submitForm').click();
        cy.get('#logout').click()
        cy.get('#registertoggle').dblclick()
        cy.get('#user').type('pushingit');
        cy.get('#pass').type('123456!');
        cy.get('#submitForm').click()
}
)
})