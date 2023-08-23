/// <reference types="cypress" />
describe("Actividad complementaria 2", () =>{
    const numero = Math.floor(Math.random() * 1000)
    it('Actividad complementaria 2', () =>{
        cy.visit('https://pushing-front.vercel.app/');
        cy.get('div[role="group"]').children('[name="user"]').type(`pushingit${numero}`);
        cy.get('[id="field-:r0:-label"]').siblings('input[name="user"]').clear()
        cy.get('form').find('input#user').type(`pushingit${numero}`);
        cy.get('div[role="group"]').children('[name="pass"]').type('123456!');
        cy.get('[Value="Other"]').check( {force: true});
        cy.get('[name^="da"]').select('20')
        cy.get('[name*="ont"]').select('September')
        cy.get('[name$="ear"]').select(10)
        cy.get('fieldset').siblings('[type=submit]').click()
        cy.wait(5000)
    });
});