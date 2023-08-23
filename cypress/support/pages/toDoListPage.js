export class ToDoListPage {
    constructor(){
        this.tareaInput = 'input[name ="task"]';
        this.sendTaskButton = '#sendTask';
        this.allButton = '#all'
        this.completedButton = '#completed'
        this.activeButton = '#active'
        this.removeAllButton = '#removeAll'

    };
    
    escribirTarea(tarea){
        cy.get(this.tareaInput).type(tarea)
    };

    clickSendtask() {
        cy.get(this.sendTaskButton).click();
    };

    clickDeleteButton(tarea){
        cy.xpath(`//p[text()="${tarea}"]//following-sibling::button[text()="Delete"]`).click();
    };

    obtenerTarea(tarea){
        return cy.contains(tarea);
    };

    obtenerAllButton(allButton){
        return cy.get(this.allButton);
    };

    obtenerCompletedButton(completedButton){
        return cy.get(this.completedButton);
    };

    obtenerActiveButton(activeButton){
        return cy.get(this.activeButton);
    };

    obtenerRemoveAllButton(removeAllButton){
        return cy.get(this.removeAllButton);
    };
}