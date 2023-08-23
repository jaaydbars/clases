/// <reference types="cypress" /> 

describe ('Mocha', () =>{
    let data;

    it(" Primer test con cypress usando Mocha", () =>{
        data = {
            curso: "Pushing IT",
            profesor: "Fabrizio Otranto"
        }
        cy.log('Primer test con cypress')

    })

    it("Segundo test con cypress usando Mocha", () =>{
        data = {
            curso: "Pushing IT 2",
            profesor: "Fabrizio"
        }
        cy.log('Segundo test con cypress')
    })

})

it("Tercer test con cypress usando Mocha", () =>{
    cy.log('Tercer test con cypress')
})