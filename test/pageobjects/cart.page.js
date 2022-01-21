class CartPage  {
    /* Locators */
    get CheckoutButton() {
        return $('#checkout');
    }

    /* Methods */        
    clickCheckoutButton() {
        return this.CheckoutButton.click();
    }
}

module.exports = new CartPage();