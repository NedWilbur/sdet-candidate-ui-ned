const Page = require('./page');
const Item = require("../objects/item");

/**
 * sub page containing specific selectors and methods for a specific page
 */
class InventoryPage extends Page {
    /**
     * define selectors using getter methods
     */
    get secondaryTitle() {
        return $('#header_container > div.header_secondary_container > span')
    }

    // TODO: Add locators & methods *ByName and *ById
    itemContainerByIndex(index = 1) {
        return $(`//div[@class='inventory_item'][${index}]`);
    }

    itemAddButtonByIndex(index = 1) {
        return this.itemContainerByIndex(index).$("//button[.='Add to cart']");
    }

    itemTitleButtonByIndex(index = 1) {
        return this.itemContainerByIndex(index).$('.inventory_item_name');
    }

    itemDescriptionButtonByIndex(index = 1) {
        return this.itemContainerByIndex(index).$('.inventory_item_desc');
    }

    itemPriceButtonByIndex(index = 1) {
        return this.itemContainerByIndex(index).$('.inventory_item_price');
    }   

    /* Methods */
    async addItemToCart(index = 1) { 
        await this.itemAddButtonByIndex(index).click();
        return await this.getItemDetails(index);
    }

    async clickItemTitle(index = 1) {
        let item = await this.getItemDetails(index);
        await this.itemTitleButtonByIndex(index).click();
        return item;
    } 

    async getItemDetails(index = 1) {
        return await new Item(
            await this.itemTitleButtonByIndex(index).getText(),
            await this.itemDescriptionButtonByIndex(index).getText(),
            await this.itemPriceButtonByIndex(index).getText(),
        )
    }
}

module.exports = new InventoryPage();