import { ToDoListPage } from "../support/pages/toDoListPage";

describe('Actividad complementaria 7', () => { 
    let datos;
    const toDoListPage = new ToDoListPage();

before('Before', () => {
    cy.fixture('datos').then(data => {
    datos = data;
})
})

    beforeEach("Actividad complementaria 7", () => {
       cy.visit('');
       cy.get("#registertoggle").dblclick()
       cy.get('#user').type('pushingit')
       cy.get('#pass').type('123456!')
       cy.get('#submitForm').click()
       cy.xpath(`//h2[starts-with(@id,'user_pushingit')]`).should('exist')
       cy.contains('To Do List').click()
   })

     it("Deberia sacar una foto completa", () =>{
        cy.screenshot({capture:"fullPage"});
        //agregar 3 tareas y sacar una foto a la pantalla completa
   });

it("Deberia sacar una foto a las tres tareas", () =>{
    //agregar 3 tareas y sacar una foto a las tareas (las 3 tareas en la misma foto - cuadro celeste)
    toDoListPage.escribirTarea(datos.primerTest.tarea1)
    toDoListPage.clickSendtask();
    toDoListPage.escribirTarea(datos.primerTest.tarea2)
    toDoListPage.clickSendtask();
    toDoListPage.escribirTarea(datos.primerTest.tarea3)
    toDoListPage.clickSendtask();
    cy.get('.css-ha1fhc').screenshot("Tareas")
})
})
// Instalar git
// Inicializa un repositorio en github desde visual studio code
// Subi el repositorio completo. Recorda usar .gitignore para ignorar la carpeta node modules
// recorda usar los comandos git add (o usa visual studio code para elegir los archivos) // git commit -m "mensaje" // git push origin {nombre de tu branch}
// SI es la primera vez que usas git te va a pedir que pongas las credenciales y autorices github en el navegador