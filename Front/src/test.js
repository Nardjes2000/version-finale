const webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

const driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();

driver.get('http://localhost:3000/Add');

driver.sleep(1000).then(function() {
  driver.getTitle().then(function() {
    driver.findElement(By.name('title')).sendKeys('webdriver');
    driver.findElement(By.name('profsName')).sendKeys('webdriver');
    driver.findElement(By.name('studentName')).sendKeys('webdriver');
    driver.findElement(By.id('month')).sendKeys('october 2018');
    driver.findElement(By.id('description')).sendKeys('Hello babe!!!!');
    driver.findElement(By.id('send')).click();
  });
});
driver.sleep(15000).then(function() {
  driver.getTitle().then(function(title) {
    if(title === 'React App') {
      console.log('Test passed');
    } else {
      console.log('Test failed');
    }
    driver.quit();
  });
}); 
