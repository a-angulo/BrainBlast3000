import React from "react";
import { mount } from "cypress/react18";
import Quiz from "../../client/src/components/Quiz";

describe("Quiz Component", () => {
  it("renders the start button", () => {
    mount(<Quiz />);
    cy.get("button").contains("Start Quiz").should("exist");
  });

  it("starts the quiz and displays questions on button click", () => {
    mount(<Quiz />);
    cy.get("button").contains("Start Quiz").click();
    cy.get(".card").should("exist");
  });

  it("handles correct answer", () => {
    mount(<Quiz />);
    cy.get("button").contains("Start Quiz").click();
    cy.get(".btn-primary").first().click();
    cy.get(".card").should("exist");
  });

  it("handles incorrect answer", () => {
    mount(<Quiz />);
    cy.get("button").contains("Start Quiz").click();
    cy.get(".btn-primary").last().click();
    cy.get(".card").should("exist");
  });

  it("Goes to the next question after answering", () => {
    mount(<Quiz />);
    cy.get("button").contains("Start Quiz").click();
    cy.get(".btn-primary").first().click();
    cy.get(".card").should("exist");
  });

  it("displays the completed screen with score", () => {
    mount(<Quiz />);
    cy.get("button").contains("Start Quiz").click();
    cy.get(".btn-primary").first().click();
    cy.get(".btn-primary").first().click();
    cy.get(".btn-primary").first().click();
    cy.get(".btn-primary").first().click();
    cy.get(".btn-primary").first().click();
    cy.get(".btn-primary").first().click();
    cy.get(".btn-primary").first().click();
    cy.get(".btn-primary").first().click();
    cy.get(".btn-primary").first().click();
    cy.get(".btn-primary").first().click();
    cy.get(".alert-success").should("exist");
    cy.get("button").contains("Take New Quiz").should("exist");
    cy.get('h2').contains('Quiz Completed').should('exist');
  });

    it("restarts the quiz on button click", () => {
        mount(<Quiz />);
        cy.get("button").contains("Start Quiz").click();
        cy.get(".btn-primary").first().click();
        cy.get(".btn-primary").first().click();
        cy.get(".btn-primary").first().click();
        cy.get(".btn-primary").first().click();
        cy.get(".btn-primary").first().click();
        cy.get(".btn-primary").first().click();
        cy.get(".btn-primary").first().click();
        cy.get(".btn-primary").first().click();
        cy.get(".btn-primary").first().click();
        cy.get(".btn-primary").first().click();
        cy.get(".alert-success").should("exist");
        cy.get("button").contains("Take New Quiz").click();
        cy.get(".card").should("exist");
    });
});
       
