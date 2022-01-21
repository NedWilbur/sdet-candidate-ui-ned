const Page = require('./page');

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

    /* Methods */
    addItemToCart(index = 1) { 
        return this.itemAddButtonByIndex(index).click();
    }

    clickItemTitle(index = 1) {
        return this.itemTitleButtonByIndex(index).click();
    } 
}

module.exports = new InventoryPage();