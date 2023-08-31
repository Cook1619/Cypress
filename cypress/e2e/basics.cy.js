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
    cy.get('[data-cy=start-add-task-button]').click()
    cy.get('.modal').should('be.visible')
    cy.get('button[type="button"]').contains('Cancel').click()
    cy.get('.backdrop').should('not.exist')
    cy.get('.modal').should('not.exist')
  })

  it('should create a task', () => {
    cy.get('[data-cy=start-add-task-button]').click()
    cy.get('input[id="title"]').type('Walk Dog')
    cy.get('textarea[id="summary"]').type('I need to walk my dog at least 3 miles')
    cy.get('select[id="category"]').select('important')
    cy.get('button[type="submit"]').click()
    cy.get('.backdrop').should('not.exist')
    cy.get('.modal').should('not.exist')
    cy.get('h2').contains('Walk Dog')
    cy.get('p').contains('I need to walk my dog at least 3 miles')
    cy.get('.task-list').should('have.length', 1)
  })
})