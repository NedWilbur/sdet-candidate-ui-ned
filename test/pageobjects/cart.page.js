class CartPage  {
    /* Locators */
    get CartItems() {
        return $$('.cart_item');
    }

    get CheckoutButton() {
        return $('#checkout');
    }

    /* Methods */        
    async clickCheckoutButton() {
        await this.CheckoutButton.click();
    }

    async cartItemExist(item) {
        let allItems = await this.CartItems;
        for (const itemElement of allItems){
            let title = await itemElement.$('.inventory_item_name').getText()
            if (title == item.title) return true;
        }
        return false;
    }
}

module.exports = new CartPage();