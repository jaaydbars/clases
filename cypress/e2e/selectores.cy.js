describe ('Selectores', () =>{
    it('Encontrar elementos utilizando cssSlectors', () => {
        cy.visit('');
        cy.get("button"); // localizar por tagname
        cy.get('[type=submit]') // localizar por atributo
        cy.get('#user') // localizar por ID
        cy.get('[id=user]') // localizar por ID
        cy.get('.password') // localizar por clase
        cy.get('input.password') // localizar por clase
        cy.get('input[id="pass"]') // localizar por clase

        // Si los elementos son dinamicos
        cy.get('[type^=sub]') // Si empieza por "sub"
        cy.get('[type*=bm]') // Si contiene "bm"
        cy.get('[type$=mit]') // Si termina con "mit"
        
        // Localizar por texto visible
        cy.contains('button[type="submit"]', 'regis', {matchCase: false} ) // no case sensitive
        cy.contains('button[type="submit"]', 'regis', {matchCase: true} ) // case sensitive
    
    })

    it("Encontrar elementos web utilizando find", () => {
        cy.visit('');
        cy.get('form').find('input#user')
        cy.get('form').find('img')
    })

    it.only("Encontrar elementos web utilizando sibbling", () => {
        cy.visit('');
        cy.contains('span', 'Male').siblings('input').check({ force: true })
    })

    it.only("Encontrar elementos web utilizando parent", () => {
        cy.visit('');
        cy.get('[name="user"]').parent('div')
    })

    it.only("Encontrar elementos web utilizando children", () => {
        cy.visit('');
        cy.get('div[role="group"]').children('[name="user"]')
    })
})