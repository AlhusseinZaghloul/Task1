import  {test, expect} from '@playwright/test' 
import { LoginPage } from './login.page.ts';


test.describe('Login tests', () => {
  
test('Valid Login', async ({page}) => {
    const login= new  LoginPage(page) 
    await login.NavigateToLoginPage('')
    await login.performLogin("alhussein","123456")
    await expect(page).toHaveURL('/dashboard')

    
    // await page.context().storageState({path:'./Auth.json'})
})

test('invalid Login', async ({page}) => {
    const login= new  LoginPage(page) 
    await login.NavigateToLoginPage('')
    await login.performLogin("alhussein","12347777")
    await page.waitForTimeout(18*1000)

    // Asssertion will fail if we used valid login data
    await expect(login.passwordField, 'Invalid login data').toBeVisible()
} )

});

