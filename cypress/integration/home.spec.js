/// <reference types="cypress" />

import { HomePage } from "../pages/home.page";
import { CatalogPage } from "../pages/catalog.page";

beforeEach(() => {
  cy.viewport(1920, 1080);
  cy.visit("/");
});

describe("Test catalog", () => {
  it("Test hover 'Товары для дома' category", () => {
    const titles = ["Посуда", "Часы", "Счетчики"];
    let rndTitle = titles[Math.floor(Math.random() * titles.length)];
      new HomePage().clickCatalog()
      .hoverCategory("Товары для дома")
      .verifyTitles(...titles)
      .clickTitle(rndTitle);
    new CatalogPage().verifyHeading(rndTitle.slice(rndTitle.length - 1));
  });
});
