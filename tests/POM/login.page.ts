import { Locator, Page } from "@playwright/test";


export class LoginPage{
    readonly page:Page 
    readonly userNameField: Locator
    readonly passwordField: Locator
    readonly loginButton: Locator
    readonly errorMessage: Locator


    constructor(page:Page){
        this.page = page
        this.userNameField = page.locator('#userName')
        this.passwordField = page.locator('input[placeholder="Password"]')
        this.loginButton =   page.locator('button[type="submit"]');
        this.errorMessage=page.locator('.err')  
    }

    async NavigateToLoginPage(url:string){
        await this.page.goto(url)
    }

    async performLogin(userName:string, password:string){
        await this.userNameField.fill(userName)
        await this.passwordField.click()
        await this.passwordField.fill(password)
        await this.loginButton.click()
    }
    


}