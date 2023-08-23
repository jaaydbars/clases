/// <reference types="cypress" /> 

describe('Hooks', () => {
    
        let datos;

    before('Before', () => {
        cy.log('Before')
        datos = {
            "tarea1": "Hacer las compras",
            "tarea2": "Hacer la comida",
            "tarea3": "Limpieza"
        }

    })

    beforeEach('BeforeEach',() => {
        cy.log('Before Each');
        cy.visit('');
        cy.get('#registertoggle').dblclick()
        cy.get('div[role="group"]').children('[name="user"]').type(`pushingit`);
        cy.get('div[role="group"]').children('[name="pass"]').type('123456!');
        cy.get('#submitForm').click()
    })

    const numero = Math.floor(Math.random() * 1000)
    it('Deberia permitir completar una tarea', () =>{
        cy.get('#todolistlink').click();
        cy.get('.css-hboir5').children('#task').type(datos.tarea1);
        cy.get('[type=submit').click();
        cy.get('.css-hboir5').children('#task').type(datos.tarea2);
        cy.get('[type=submit').click();
        cy.get('.css-hboir5').children('#task').type(datos.tarea3);
        cy.get('[type=submit').click();
        cy.contains('hacer las compras', {matchCase: false} ).click();

    })
})
