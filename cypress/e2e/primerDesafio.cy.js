/// <reference types="cypress" /> 

describe('Primer desafio con cypress', () => {

    const numero = Math.floor(Math.random() * 1000)
    it('Deberia permitir completar una tarea', () =>{
        cy.visit('');
        cy.get('div[role="group"]').children('[name="user"]').type(`pushingit${numero}`);
        cy.get('div[role="group"]').children('[name="pass"]').type('123456!');
        cy.get('[Value="Male"]').check( {force: true} );
        cy.get('[name^="da"]').select('20');
        cy.get('[name*="ont"]').select('September');
        cy.get('[name$="ear"]').select(10);
        cy.get('fieldset').siblings('[type=submit]').click();

        cy.get('#todolistlink').click();
        cy.get('.css-hboir5').children('#task').type('Hacer las compras');
        cy.get('[type=submit').click();
        cy.contains('hacer las compras', {matchCase: false} ).click();
    })
})
