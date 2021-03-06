
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
   driver.get('http://localhost:3000/')
})

afterAll(async () => {
     driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})
test('clicking Draw button should display div with id=choices', async() =>{
    const draw = await driver.findElement(By.id('draw'))
    await draw.click() 
    const choices = await driver.findElement(By.id('choices'))
    const displayed = await choices.isDisplayed()
    expect(displayed).toBe(true)
})
test('clicking an Add to Duo button displays the div w/ id=player-duo', async() =>{
    const draw = await driver.findElement(By.id('draw'))
    await draw.click() 
    const addToDuo = await driver.findElement(By.xpath('//*[text()="Add to Duo"]'))
    await addToDuo.click()
    const playerDuo = await driver.findElement(By.id('player-duo'))
    const displayed = await playerDuo.isDisplayed()
    expect(displayed).toBe(true)
})