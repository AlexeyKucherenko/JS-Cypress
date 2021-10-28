/// <reference types="cypress" />

import { BaseLayout } from ".";

export class HomePage extends BaseLayout{
  clickCatalog() {
    cy.get("#fat-menu").click();
    return new CatalogBlock();
  }
}

export class CatalogBlock {
  hoverCategory(category) {
    cy.xpath(
      `//a[contains(@class,'menu-categories') and contains(.,'${category}')]`
    ).trigger("mouseover");
    return this;
  }

  #titleEl(title) {
    return cy.get("ul[class*='menu'][class*='list']").contains(title);
  }

  verifyTitles(...titles) {
    for (const title of titles) {
      this.#titleEl(title).should("be.visible");
    }
    return this;
  }

  clickTitle(title) {
      this.#titleEl(title).click()
  }
}
