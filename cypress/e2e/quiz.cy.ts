describe('BrainBlast 3000 E2E tests', () => {
    beforeEach(() => {
        cy.visit('/');
    });
    
    it('should display the start quiz button', () => {
        cy.get('button').contains('Start Quiz').should('be.visible');
    });
    
    it('should start the quiz when the button is clicked', () => {
        cy.intercept('GET', '/api/questions/random', { fixture: 'questions.json' }).as('getQuestions');
        cy.get('button').contains('Start Quiz').click();
        cy.wait('@getQuestions');
        cy.get('.card').should('be.visible');
    });
    
    it('should display the current question and answers', () => {
        cy.intercept('GET', '/api/questions/random', { fixture: 'questions.json' }).as('getQuestions');
        cy.get('button').contains('Start Quiz').click();
        cy.wait('@getQuestions');
    
        cy.get('.card').should('be.visible');
        cy.get('.btn-primary').should('have.length', 4);
        cy.get('h2').should('contain', 'What is the output of print(2 ** 3)?');
    });
        
    it('should navigate to the next question when an answer is clicked', () => {
        cy.intercept('GET', '/api/questions/random', { fixture: 'questions.json' }).as('getQuestions');
        cy.get('button').contains('Start Quiz').click();
        cy.wait('@getQuestions');
    
        cy.get('.btn-primary').first().click();
        cy.get('h2').should('contain', 'Which of the following is a mutable data type in Python?');
    
        // Click on the next answer
        cy.get('.btn-primary').first().click();
        // Check if the next question is displayed
        cy.get('h2').should('contain', 'What is the keyword used to define a function in Python?');
    });
    
    it('should display the quiz completed message and score at the end of the quiz', () => {
        cy.intercept('GET', '/api/questions/random', { fixture: 'questions.json' }).as('getQuestions');
        cy.get('button').contains('Start Quiz').click();
        cy.wait('@getQuestions');
    
        // Answer all questions
        cy.get('.btn-primary').first().click();
        cy.get('.btn-primary').first().click();
        cy.get('.btn-primary').first().click();
        cy.get('h2').should('contain', 'Quiz Completed');
        cy.get('.alert-success').should('contain', 'Your score:');
        cy.get('button').contains('Take New Quiz').should('be.visible');
    });

    it('should start a new quiz when the button is clicked after completion', () => {
        cy.intercept('GET', '/api/questions/random', { fixture: 'questions.json' }).as('getQuestions');
        cy.get('button').contains('Start Quiz').click();
        cy.wait('@getQuestions');
    
        // Answer all questions
        cy.get('.btn-primary').first().click();
        cy.get('.btn-primary').first().click();
        cy.get('.btn-primary').first().click();
    
        // Click on the "Take New Quiz" button
        cy.get('button').contains('Take New Quiz').click();
    
        // Check if the quiz started again
        cy.get('h2').should('not.contain', 'Quiz Completed');
        cy.get('h2').should('contain', 'What is the output of print(2 ** 3)?');
    });
});