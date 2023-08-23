describe("Actividad complementaria 3", () =>{
	// instalar la dependencia cypress-xpath
  // remplazar todos los selectores 'cssSelectors' por expresiones xpath
  // recorda usar el metodo cy.xpath y agregar la dependencia en el archivo e2e.
    it('Actividad complementaria 3', () =>{
        cy.visit('');
        cy.xpath(`//span[text()='Iniciá sesión']`).dblclick();
        cy.xpath('//div[@role="group"][1]//child::input').type(`pushingit`);
        cy.xpath('//label[@for="pass"]//following-sibling::input').type('123456!');
        cy.xpath('/html/body/div[1]/div/div/div/form/button').click();
        cy.xpath(`//a[contains(@id,'todolistlink')]`).click();
        cy.xpath(`//button[contains(text(), 'Send')]`).type("tarea 1");
        cy.xpath(`//button[starts-with(text(), 'Sen')]`).click();
        cy.xpath('//button[@type="button"]//preceding-sibling::p').click();
    });
});