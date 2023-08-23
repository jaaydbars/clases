/// <reference types="cypress" /> 

describe('Actividad complementaria 4', () => {
    
    let actividad4;
    
    //inicializa el fixture
    before('Before', () => {
        cy.log('Before');
        cy.fixture('actividad4').then(data => {
        actividad4 = data;
        })
    })

    beforeEach('BeforeEach',() => {
        cy.log('Before Each');
        cy.visit('');
        cy.get('#registertoggle').dblclick()
    })

    it('Deberia validar un mensaje de error al colocar un usuario inexistente', () => {
        cy.get('#user').type(actividad4.username);
        cy.get('#pass').type(actividad4.password); //la contraseña debe ser valida por el sistema
        cy.get('#submitForm').click();
        cy.get('#messageError').should('have.text', actividad4.error);
    });
});