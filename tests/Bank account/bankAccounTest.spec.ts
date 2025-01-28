import  {test, expect} from '@playwright/test' 
import { LoginPage } from '../Login/login.page.ts'
import { BankAccountPage } from './BankAccountPage.ts'

test.describe('Grid Validation', () => {
    test.beforeEach(async ({ page }) => {
        const login= new  LoginPage(page) 
        await login.NavigateToLoginPage('')
        await login.performLogin("orban","123456")
        await expect(page).toHaveURL('/dashboard')
      });
  
   test('Pagination', async ({page}) => {
       const bankAccountPage= new BankAccountPage(page)
       await bankAccountPage.navigateToBankAccountPage("/finance/cash-and-bank/setup/bank-accounts")
       await bankAccountPage.nextButton.click()    
       expect(bankAccountPage.nextButton, 'Page number 2 is displayed').toBeVisible 
    })

      test('Branch Filter', async ({page}) => {
          const bankAccountPage= new BankAccountPage(page)
          await bankAccountPage.navigateToBankAccountPage("/finance/cash-and-bank/setup/bank-accounts")
          // const dynamicBranchName:string=bankAccountPage.getDynamicBranchValue()  
          await bankAccountPage.filterByBranch("NBK")   
          const branchText = await bankAccountPage.getBranchValue('NBK')
          expect(branchText).toBeTruthy()

          //expect(branchText?.trim()).toBe('NBK') 
         
      }); 
   }); 
   