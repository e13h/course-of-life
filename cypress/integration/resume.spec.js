/// <reference types="Cypress" />

describe('Resume', () => {
    beforeEach(() => {
        cy.visit('http://localhost:4200')
    })

    it('checks the resume component exists', () => {
        cy.get('[data-cy=workExperience]')
        cy.get('[data-cy=workExperiencesList]').children().first().as('firstExperience')
        cy.get('@firstExperience').should('have.class', 'mat-list-item')
    })
})