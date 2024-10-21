import { Locator, Page } from "@playwright/test"


export class BankAccountPage{
    //readonly url: string
    readonly page: Page
    readonly nextButton: Locator
    //readonly pagenation2: Locator
    readonly branchField: Locator

    constructor(page:Page){
        this.page = page
        this.nextButton=page.locator('.k-i-arrow-60-right')
        //this.pagenation2=page.locator('text=2')
        this.branchField=page.locator('input[title="Branch"]')
    }

    async navigateToBankAccountPage(url:string){
        await this.page.goto(url)
    }
    async filterByBranch(branchName:string){
        await this.branchField.fill(branchName)
        await this.page.keyboard.press('Enter');
    }
        async getBranchValue(branchName:string){
        const bankValue = branchName;  // This can be a dynamic value
        return await this.page.locator(`//td[@id="bankAccountsGrid_active_cell"]//span[contains(text(), "${bankValue}")]`).textContent()
    } 
    
    

  

}