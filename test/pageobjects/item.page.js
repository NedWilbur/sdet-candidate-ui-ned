class ItemPage  {
    /* Locators */
    get AddToCartButton() {
        return $("//button[.='Add to cart']");
    }

    /* Methods */        
    async addToCart() { 
        await this.AddToCartButton.click();
    }
}

module.exports = new ItemPage();