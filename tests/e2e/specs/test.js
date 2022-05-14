describe("ToDo List", () => {
  beforeEach(() => {
    cy.visit("http://localhost:8080");
  });
  it("addTasks", () => {
    cy.get("[data-input-e2e]").type("Task 1").submit("prevent");
    cy.get("[data-tasks-e2e]>div label").first().click();
    cy.get("[data-tasks-e2e]>div label input").should("be.checked");
    cy.get("[data-counter-e2e]").should("contain", "0/1 left");
    cy.wait(1000);
    cy.get("[data-input-e2e]").type("Task 2").submit("prevent");
    cy.wait(1000);
    cy.get("[data-input-e2e]").type("Task 3").submit("prevent");
    cy.wait(1000);
    cy.get("[data-tasks-e2e]>div").should("have.length", 3);
    cy.wait(1000);
    cy.get("[data-tasks-e2e]>div button").eq(1).click();
    cy.wait(1000);
    cy.get("[data-tasks-e2e]>div").should("have.length", 2);
    cy.get("[data-tabs-e2e]>div label").eq(1).click();
    cy.get("[data-tasks-e2e]>div").should("have.length",1);
    cy.get("[data-tabs-e2e]>div label").eq(2).click();
    cy.get("[data-tasks-e2e]>div").should("have.length",1);
  });
});
