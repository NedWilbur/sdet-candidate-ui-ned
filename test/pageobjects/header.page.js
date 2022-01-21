class HeaderPage  {
    /* Locators */
    get shoppingCartButton() {
        return $('#shopping_cart_container');
    }

    get shoppingCartBadge() {
        return $('.shopping_cart_badge');
    }

    /* Methods */        
    async clickOnCart() {
        await this.shoppingCartButton.click();
    }
}

module.exports = new HeaderPage();