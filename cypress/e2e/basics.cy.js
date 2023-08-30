/// <reference types="Cypress" />

describe('tasks page', () => {
  it('should render main image', () => {
    cy.visit('http://localhost:5173/')
    cy.get('.main-header img')
  })

  it('should have title', () => {
    cy.visit('http://localhost:5173/');
    cy.get('h1').contains('React Tasks')
  })
})