/// <reference types="cypress" />

import { HomePage } from "../pages/home.page";

beforeEach(()=>{
  cy.visit("/")
})

describe("", () => {
  it("Test hover 'Товары для дома' category", () => {
    new HomePage().clickCatalog().hoverCategory("Товары для дома")
  });
});

