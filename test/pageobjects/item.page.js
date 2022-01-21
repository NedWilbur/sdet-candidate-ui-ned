class ItemPage  {
    /* Locators */
    get AddToCartButton() {
        return $("//button[.='Add to cart']");
    }

    get BackToProductsButton() {
        return $("#back-to-products");
    }

    /* Methods */        
    async addToCart() { 
        await this.AddToCartButton.click();
    }

    async clickBackToProducts() {
        await this.BackToProductsButton.click();
    }
}

module.exports = new ItemPage();