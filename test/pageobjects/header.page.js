class HeaderPage  {
    /* Locators */
    get shoppingCartButton() {
        return $('#shopping_cart_container');
    }

    get shoppingCartBadge() {
        return $('.shopping_cart_badge');
    }

    /* Methods */        
    clickOnCart() {
        return this.shoppingCartButton.click();
    }
}

module.exports = new HeaderPage();