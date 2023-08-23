 /// <reference types="cypress" />
describe("Actividad complementaria", () =>{
    it('Actividad complementeria 1', () =>{
        cy.visit('');
        cy.get('#user').type('Jordi');
        cy.get('#pass').type('123456!');
        cy.get('[Value="Male"]').check( {force: true});
        cy.get('#day').select("1"); //value
        cy.get('#month').select("January"); //texto visible
        cy.get('#year').select("1998"); //posicion del index
        cy.get('#submitForm').click();
        cy.get('#logout').click()
        cy.get('#registertoggle').dblclick()
        cy.get('#user').type('pushingit');
        cy.get('#pass').type('123456!');
        cy.get('#submitForm').click()
    });

});

