import  {test, expect} from '@playwright/test' 
import { LoginPage } from './login.page.ts' 
import { BankAccountPage } from './BankAccountPage.ts'

test.describe('Grid Validation', () => {
  
   test('Pagination', async ({page}) => {
       const login= new  LoginPage(page) 
       await login.NavigateToLoginPage('')
       await login.performLogin("orban","123456")
       await expect(page).toHaveURL('/dashboard')
       const bankAccountPage= new BankAccountPage(page)
       await bankAccountPage.navigateToBankAccountPage()
       await bankAccountPage.nextButton.click()    
       expect(bankAccountPage.nextButton, 'Page number 2 is displayed').toBeVisible
     
       
    })

   });

   test.describe('Filter grid by branch', () => {
  
      test('Branch Filter', async ({page}) => {
          const login= new  LoginPage(page) 
          await login.NavigateToLoginPage('')
          await login.performLogin("orban","123456")
          await expect(page).toHaveURL('/dashboard')
          const bankAccountPage= new BankAccountPage(page)
          await bankAccountPage.navigateToBankAccountPage("http://ahq-systest-01:8090/finance/cash-and-bank/setup/bank-accounts")
          await bankAccountPage.filterByBranch("NBK")   
        
         //I have issue with here...
         const branchText = await bankAccountPage.getBranchValue('NBK')
         expect(branchText).toBe('NBK')

      }); 
   }); 
   