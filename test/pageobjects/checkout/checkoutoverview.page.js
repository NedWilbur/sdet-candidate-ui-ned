class CheckoutOverviewPage  {
    /* Locators */
    get finishButton() {
        return $('#finish');
    }

    /* Methods */        
    clickFinishButton() {
        return this.finishButton.click();
    }
}

module.exports = new CheckoutOverviewPage();