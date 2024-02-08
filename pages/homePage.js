const { expect } = require("@playwright/test");

exports.homePage = class homePage{

    constructor(page){
        this.page = page;
        this.homeButton = page.locator("//a[text()='Home ']");
        //contactButton
        //logInButton
    }
    async go(){
        await this.page.goto('https://demoblaze.com/index.html#');
    }
    async checkHomeButton(){
        await expect(this.homeButton).toBeVisible();
    }

    async test(){
        console.log('test');
    }
}