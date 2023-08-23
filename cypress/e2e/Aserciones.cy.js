describe('Aserciones', () => {

    beforeEach('BeforeEach',() => {
        cy.log('Before Each');
        cy.visit('');
        cy.get('#registertoggle').dblclick()
        cy.get('div[role="group"]').children('[name="user"]').type(`pushingit`);
        cy.get('div[role="group"]').children('[name="pass"]').type('123456!');
        cy.get('#submitForm').click();
        cy.get('#waitslink').click();
    })

    
    it('Validar el titulo utilizando should', () => {
        cy.get('#title').should('have.text', "Waits");
    })

    it('Validar el titulo utilizando expect', () => {
        cy.get('#title').invoke('text').then(text => {
            expect(text).to.be.equal('Waits');
        })
    })

    it('Validar el titulo utilizando assert', () => {
        cy.get('#title').invoke('text').then(text => {
            assert.equal(text, 'Waits');
        })
    })

    it('Validar  length utilizando should', () => {
        const resultadoEsperado = 4
        cy.get('#title').should('have.length', "1"); // cuenta los "titulos"
        cy.get('#title').invoke('text').should('have.length', 5); // cuenta los caracteres
        cy.get('#title').invoke('text').then(text => {
            assert.lengthOf(text, 5);
        })
    })
    it.only('Validar  length utilizando should', () => {
        cy.get('#title').should('have.css', 'color', 'rgb(51, 255, 255)') // verifica el color
        cy.get('#title').should('have.attr', ) // verifica el atributo 
    })


})