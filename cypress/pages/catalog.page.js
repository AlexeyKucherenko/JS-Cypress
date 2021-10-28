import { BaseLayout } from ".";

export class CatalogPage extends BaseLayout{
  verifyHeading(text) {
    cy.get("[class*=catalog-heading]").should("contain.text", text);
    return this;
  }
}
