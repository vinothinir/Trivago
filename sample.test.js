var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;
var driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();

driver.get('https://www.bergfreunde.eu/');
driver.manage().window().maximize();
driver.findElement(webdriver.By.xpath('//*[@id="geolocation-greeting"]/div[2]/div/a')).click();
driver.findElement(webdriver.By.xpath('//*[@id="f.search"]')).click();
//Searching for specific product
driver.findElement(webdriver.By.xpath('//*[@name="searchparam"]')).sendKeys('LUNDHAGS');
driver.findElement(webdriver.By.xpath('//*[@name="searchparam"]')).sendKeys(webdriver.Key.ENTER);
//Selecting the product
driver.findElement(webdriver.By.xpath('//*[@id="18bf37f89e28119e06b4b3c28f54e77a"]')).click();
var producttile = driver.findElement(webdriver.By.xpath('//*[@id="18bf37f89e28119e06b4b3c28f54e77a"]')).getText();
//Selecting the specific colour
driver.findElement(webdriver.By.xpath('//*[@id="js-varlist-color"]/li[5]/a/img')).click();
//Selecting the size
driver.findElement(webdriver.By.xpath('//*[@id="js-varlist-size"]/li[8]/a')).click();
//Confirming the price
var price = driver.findElement(webdriver.By.xpath('//*[@id="tobasketform"]/div[1]/span[3]/span/span[3]/span')).getText();
if (price == "€ 134,96") {
    console.log("Test Pass");

}
else {
    console.log("Test Fail");
}
//Confirming the weight
var weight = driver.findElement(webdriver.By.xpath('//*[@id="datapool-description"]/div/dl/dd[11]')).getText();
if (weight == "620 g") {
    console.log("Test Pass");

}
else {
    console.log("Test Fail");
}
//Adding 2 times the item to Cart
driver.findElement(webdriver.By.xpath('//*[@id="tobasketform"]/div[3]/div[4]/button/span[1]')).click();
driver.findElement(webdriver.By.xpath('//*[@id="tobasketform"]/div[3]/div[4]/button/span[1]')).click();

//Checking product in cart
var cartproduct = driver.findElement(webdriver.By.xpath('//*[@id="popup"]/div/div[1]/div[2]/span')).getText();
if (producttile == cartproduct) {
    console.log("same product appeared in cart, Test pass")
}
else {
    console.log("Product is not correct in cart, Test Fail")
}
//Checking price in cart
var cartprice = driver.findElement(webdriver.By.xpath('//*[@id="popup"]/div/div[1]/div[4]')).getText();
if (cartprice == price) {
    console.log("same price appeared in cart, Test pass")
}
else {
    console.log("price is not correct in cart, Test Fail")
}
//Click on gotocart
driver.findElement(webdriver.By.xpath('//*[@id="popup"]/div/form/div/button[1]/span[1]')).click();

//checking for voucher text

if (driver.findElement(webdriver.By.xpath('//*[@id="basket"]/div[3]/div/div[1]/div/form/ul/li[1]/input')).isDisplayed()) {
    console.log("vocher text available,Test pass")
}
else {
    console.log("vocher text not available,Test Fail")
}
//Checking for login and create account
if (driver.findElement(webdriver.By.xpath('//*[@id="user"]/div/div[1]/div/form/div/button/span[1]')).isDisplayed() && driver.findElement(webdriver.By.xpath('//*[@id="user"]/div/div[2]/div/form/div[2]/button/span[1]')).isDisplayed()) {
    console.log("Login and createaccount is available,Test pass")
}
else {
    console.log("Login and createaccount is not available,Test Fail")
}





