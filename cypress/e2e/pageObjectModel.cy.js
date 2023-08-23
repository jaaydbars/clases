import {LoginPage} from "../support/pages/loginPage";
import {HomePage} from "../support/pages/homePage";
import { ToDoListPage } from "../support/pages/toDoListPage";

describe('Page object model', () => {
    let datos;
    const loginPage = new LoginPage();
    const homePage = new HomePage();
    const toDoListPage = new ToDoListPage();

    before('Before', () => {
    cy.fixture('datos').then(data => {
        datos = data;
    })

});

beforeEach('BeforeEach',() => {
    cy.log('Before Each');
    cy.visit('');
    cy.get('#registertoggle').dblclick()
    loginPage.escribirUsuario(Cypress.env('username'));
    loginPage.escribirContraseña(Cypress.env('password'));
    loginPage.clickLoginButton();
    homePage.clickToDoListButton();
})

it('Ingresar 2 tareas', () =>{
    toDoListPage.escribirTarea(datos.primerTest.tarea1)
    toDoListPage.clickSendtask();
    toDoListPage.escribirTarea(datos.primerTest.tarea2)
    toDoListPage.clickSendtask();
    toDoListPage.obtenerTarea(datos.primerTest.tarea2).should('exist');
    toDoListPage.clickDeleteButton(datos.primerTest.tarea2);
    toDoListPage.obtenerTarea(datos.primerTest.tarea2).should('not.exist');
    toDoListPage.obtenerAllButton().should('exist');

})

})