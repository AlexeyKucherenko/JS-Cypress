/// <reference types="cypress" />

export class HomePage{
    clickCatalog(){
        cy.xpath().click()
        return CatalogBlock()
    }
}

export class CatalogBlock{
    hoverCategory(category){
        cy.xpath(`//a[contains(@class,'menu-categories') and contains(.,'${category}')]`).trigger("mouseover")
    }
}