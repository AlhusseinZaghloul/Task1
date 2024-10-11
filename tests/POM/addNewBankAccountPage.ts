import { Locator, Page } from "@playwright/test"

export class AddNewBankAccount{
    readonly url: string = "http://ahq-systest-01:8090/finance/cash-and-bank/setup/bank-accounts/new-bank-account"
    readonly page: Page
    readonly bankNameDDL:Locator
    readonly branchNameDDL:Locator
    readonly bankAccountTypeDDL:Locator
    readonly iBANfield: Locator
    readonly saveButton: Locator
    

    constructor(page:Page){
        this.page = page
        this.bankNameDDL=page.locator('input[placeholder="Bank Name"]')
        this.branchNameDDL=page.locator('//input[@placeholder="Bank Branch"]')
        this.bankAccountTypeDDL=page.locator('input[placeholder="Account Type"]')
        this.iBANfield=page.locator('input[placeholder="Bank Account Number / IBAN"]')
        this.saveButton=page.locator('button.k-button.saveBtn')

    }
    async navigateToAddNewBankAccountPage(){
        await this.page.goto(this.url)
}

    async enterBankName(bankName:string){
        await  this.bankNameDDL.fill(bankName)
    }
    async enterBranchName(branchName:string){
       await this.branchNameDDL.fill(branchName)
    }
    async enterBankAccountType(type:string){
        await this.bankAccountTypeDDL.fill(type)
    }
    async enterIBAN(iban:string){
        await this.iBANfield.fill(iban)
    }
    async clickOnSave(){
        await this.saveButton.click()
    }

}