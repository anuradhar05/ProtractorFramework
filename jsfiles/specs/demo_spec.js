"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const exceljs_1 = require("exceljs");
//let EC=ExpectedCondition;
fdescribe("First describe", () => __awaiter(void 0, void 0, void 0, function* () {
    beforeAll(() => __awaiter(void 0, void 0, void 0, function* () {
        console.log("Executing befor each");
        yield protractor_1.browser.waitForAngularEnabled(false);
        yield protractor_1.browser.get("https://the-internet.herokuapp.com/");
    }));
    fit("First it", () => __awaiter(void 0, void 0, void 0, function* () {
        let wb = yield new exceljs_1.Workbook();
        yield wb.xlsx.readFile("./ExcelFiles/Book.xlsx");
        let sheet = yield wb.getWorksheet("Sheet1");
        // let rowObject:Row = await sheet.getRow(1);
        // let cellObject1:Cell = await rowObject.getCell(1);
        // let cellObject2:Cell = await rowObject.getCell(2);
        // let cellObject3:Cell = await rowObject.getCell(3);
        // await console.log(cellObject1.toString());
        // await console.log(cellObject2.value);
        // await console.log(cellObject3.value);
        // await console.log(wb.getWorksheet("Sheet1").getRow(1).getCell(1).value);
        //*****************reading all the rows*************//
        yield console.log("***************************");
        let totalRow = yield sheet.rowCount;
        for (let i = 1; i <= totalRow; i++) {
            //  let rowObject = await sheet.getRow(i);
            //  let cellObject= await rowObject.getCell(1);
            yield console.log(sheet.getRow(i).getCell(1).toString());
        }
        yield console.log("***************************");
        let totalCol = yield sheet.columnCount;
        for (let i = 2; i <= totalCol; i++) {
            //  let rowObject = await sheet.getRow(i);
            //  let cellObject= await rowObject.getCell(1);
            yield console.log(sheet.getRow(1).getCell(i).toString());
        }
        yield console.log("*********Writing to Excel******************");
        yield wb.xlsx.readFile("./ExcelFiles/Book.xlsx");
        sheet = yield wb.getWorksheet("Sheet1");
        yield sheet.getRow(9).getCell(5).value;
        "Anuradha";
        yield wb.xlsx.writeFile("./ExcelFiles/Book1.xlsx");
        //  let wb =await new Workbook();
        //  await wb.xlsx.readFile("./ExcelFiles/Book.xlsx");
        // let sheet:Worksheet = await wb.getWorksheet("Sheet1");
        // await browser.waitForAngularEnabled (false);
        // await browser.get("https://the-internet.herokuapp.com/");
        yield console.log("@@@@@@@@@@@@@");
        yield protractor_1.browser.executeScript("arguments[0].scrollIntoView();", protractor_1.element(protractor_1.by.xpath("//a[text()='Form Authentication']")));
        // await browser.actions().mouseMove(element(by.xpath("//a[text()='Form Authentication']"))).perform();
        yield protractor_1.browser.element(protractor_1.by.xpath("//a[text()='Form Authentication']")).click();
        yield protractor_1.browser.element(protractor_1.by.id("username")).sendKeys("tomsmith");
        yield protractor_1.browser.sleep(5000);
        yield protractor_1.browser.element(protractor_1.by.id("password")).sendKeys("SuperSecretPassword!"); //---//button[@type="submit"]/i  
        yield protractor_1.browser.sleep(5000);
        yield protractor_1.browser.element(protractor_1.by.xpath("//button[@type='submit']/i")).click(); //---(//div[@class="row"]/div/div)[1]
        yield protractor_1.browser.sleep(5000);
        let text = yield protractor_1.browser.element(protractor_1.by.xpath("//div[@id='flash']")).getText(); //.getAttribute("value");
        yield console.log(text);
        yield expect(text).toContain("You logged into a secure area!");
    }));
    describe("First describe", () => __awaiter(void 0, void 0, void 0, function* () {
        beforeAll(() => __awaiter(void 0, void 0, void 0, function* () {
            console.log("Executing befor each");
            yield protractor_1.browser.waitForAngularEnabled(false);
            yield protractor_1.browser.get("https://www.w3schools.com/html/html_tables.asp");
        }));
        it("First it", () => __awaiter(void 0, void 0, void 0, function* () {
            yield protractor_1.browser.manage().window().maximize();
            yield protractor_1.browser.sleep(5000);
            let rowsize = yield protractor_1.browser.element.all(protractor_1.by.xpath("//table[@id='customers']//tr")).count();
            yield console.log(rowsize);
            let colsize = yield protractor_1.browser.element.all(protractor_1.by.xpath("//table[@id='customers']//tr[1]/th")).count();
            yield console.log(colsize);
            // for(let i=2;i<=rowsize;i++)
            // {
            //     let country= await browser.element(by.xpath("//table[@id='customers']//tr["+i+"]/td[3]")).getText();
            //     if(country=="Mexico")
            //     {
            //        await console.log("mexico is present at row " +i); 
            //        break;
            //     }
            //     if(i==rowsize)
            //     {
            //          await console.log("mexico not found"); 
            //     }
            // }
            // let list = new ArrayList<String>;
            for (let i = 2; i <= rowsize; i++) {
                let country = yield protractor_1.browser.element(protractor_1.by.xpath("//table[@id='customers']//tr[" + i + "]/td[3]")).getText();
                // list.add(country)
                yield console.log(country);
                if (country == "Mexico") {
                    yield console.log("mexico is present at row " + i);
                    break;
                }
                if (i == rowsize) {
                    yield console.log("mexico not found");
                }
            }
            //table[@id='customers']//tr[3]/td[3]
            // await browser.waitForAngularEnabled (false);
            // await browser.get("https://the-internet.herokuapp.com/");
            // await console.log("@@@@@@@@@@@@@");
            // await browser.executeScript("arguments[0].scrollIntoView();",element(by.xpath("//a[text()='Form Authentication']")));
            // // await browser.actions().mouseMove(element(by.xpath("//a[text()='Form Authentication']"))).perform();
            // await browser.element(by.xpath("//a[text()='Form Authentication']")).click();
            // await browser.element(by.id("username")).sendKeys("tomsmith");
            // await browser.sleep(5000);
            // await browser.element(by.id("password")).sendKeys("SuperSecretPassword!");  //---//button[@type="submit"]/i  
            // await browser.sleep(5000);
            // await browser.element(by.xpath("//button[@type='submit']/i")).click();//---(//div[@class="row"]/div/div)[1]
            //   await browser.sleep(5000);
            // let text= await browser.element(by.xpath("//div[@id='flash']")).getText();//.getAttribute("value");
            // await console.log(text);
            // await expect(text).toContain("You logged into a secure area!") 
        }));
    }));
    it("Second it", () => __awaiter(void 0, void 0, void 0, function* () {
        yield console.log("@@@@@@@@@@@@@");
        yield protractor_1.browser.executeScript("arguments[0].scrollIntoView();", protractor_1.element(protractor_1.by.xpath("//a[text()='Form Authentication']")));
        // await browser.actions().mouseMove(element(by.xpath("//a[text()='Form Authentication']"))).perform();
        yield protractor_1.browser.element(protractor_1.by.xpath("//a[text()='Form Authentication']")).click();
        yield protractor_1.browser.element(protractor_1.by.id("username")).sendKeys("tomsmith");
        yield protractor_1.browser.sleep(5000);
        yield protractor_1.browser.element(protractor_1.by.id("password")).sendKeys("SuperSecretPassword!"); //---//button[@type="submit"]/i  
        yield protractor_1.browser.sleep(5000);
        yield protractor_1.browser.element(protractor_1.by.xpath("//button[@type='submit']/i")).click(); //---(//div[@class="row"]/div/div)[1]
        yield protractor_1.browser.sleep(5000);
        //await browser.wait(ExpectedCondition.presenceOf(element(by.xpath("//div[@id='flash']"))))
        let text = yield protractor_1.browser.element(protractor_1.by.xpath("//div[@id='flash']")).getText(); //.getAttribute("value");
        yield console.log(text);
        yield expect(text).toContain("You logged into a secure area!");
        afterAll(() => __awaiter(void 0, void 0, void 0, function* () {
            console.log("Executing afterall");
        }));
    }));
}));
