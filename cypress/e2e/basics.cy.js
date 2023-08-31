/// <reference types="cypress" />

describe('tasks page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/')
  })
  it('should render main image', () => {
    cy.get('.main-header img')
  })

  it('should have title', () => {

    cy.get('h1').should('have.length', 1)
    cy.get('h1').contains('React Tasks')
  })

  it('should open and close the modal by clicking the appropriate buttons', () => {
    cy.get('[data-cy=start-add-task-button]').click();
    cy.get('.modal').should('be.visible')
    cy.get('button[type="button"]').contains('Cancel').click()
    cy.get('.backdrop').should('not.exist')
    cy.get('.modal').should('not.exist')
  })
})