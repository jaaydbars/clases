import { ToDoListPage } from "../support/pages/toDoListPage";
import {LoginPage} from "../support/pages/loginPage";

describe('Actividad complementaria 6', () => { 
    const toDoListPage = new ToDoListPage();
    const loginPage = new LoginPage();
    
        
         beforeEach("Actividad complementaria 5", () => {
            cy.visit('');
            cy.get("#registertoggle").dblclick();
            loginPage.escribirUsuario(Cypress.env('username'));
            loginPage.escribirContraseña(Cypress.env('password'));
            loginPage.clickLoginButton();
            cy.xpath(`//h2[starts-with(@id,'user_pushingit')]`).should('exist');
            cy.get('#todolistlink').click();
        });
    
          it("deberia verificar que los botones existen", () =>{
            toDoListPage.obtenerAllButton().should('exist'); //modificarlo usando pageObjectModel. Recorda hacer la asercion en el test
            toDoListPage.obtenerCompletedButton().should('exist'); //modificarlo usando pageObjectModel. Recorda hacer la asercion en el test
            toDoListPage.obtenerActiveButton().should('exist'); //modificarlo usando pageObjectModel. Recorda hacer la asercion en el test
            toDoListPage.obtenerRemoveAllButton().should('exist'); //modificarlo usando pageObjectModel. Recorda hacer la asercion en el test
        });
     });