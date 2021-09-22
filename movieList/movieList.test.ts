import { Builder, Capabilities, By } from "selenium-webdriver"


const chromedriver = require('chromedriver')


const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async () => {
    await driver.get('http://127.0.0.1:5500/movieList/index.html')
})

afterAll(async () => {
    await driver.quit()
})


describe('All the movie things', () => {

    test('I can add a movie', async () => {
    let input = await driver.findElement(By.name("input"))
    await input.sendKeys('Batman\n')

    let button = await driver.findElement(By.xpath("//button"))
    await button.click()
    await driver.sleep(750)
})

test("cross off movie", async () => {
    let movieWatched = await driver.findElement(By.xpath("//span"))
    await movieWatched.click()
    await driver.sleep(500)
    await movieWatched.click()
    await driver.sleep(500)
})

test("Delete movie", async () => {
    // let deleteMovie = await driver.findElement(By.id("Batman"))
    let deleteMovie = await driver.findElement(By.xpath(".//button[text()='x']"))
    await deleteMovie.click()
    await driver.sleep(1000)
})

})
