import {browser,by,element } from "protractor";
import {Workbook, Row, Cell} from 'exceljs';



//let EC=ExpectedCondition;

fdescribe("First describe", async() => {
    beforeAll(async()=>
    {
        console.log("Executing befor each");
         await browser.waitForAngularEnabled (false);
        await browser.get("https://the-internet.herokuapp.com/");
    });
   
    
    fit("First it", async() => {
        let wb:Workbook =await new Workbook();
        await wb.xlsx.readFile("./ExcelFiles/Book.xlsx");
        let sheet = await wb.getWorksheet("Sheet1");
        // let rowObject:Row = await sheet.getRow(1);
        // let cellObject1:Cell = await rowObject.getCell(1);
        // let cellObject2:Cell = await rowObject.getCell(2);
        // let cellObject3:Cell = await rowObject.getCell(3);
		// await console.log(cellObject1.toString());
        // await console.log(cellObject2.value);
        // await console.log(cellObject3.value);

        // await console.log(wb.getWorksheet("Sheet1").getRow(1).getCell(1).value);

        //*****************reading all the rows*************//
        await console.log("***************************");
        let totalRow= await sheet.rowCount;
        for(let i =1;i<=totalRow;i++)
        {
            //  let rowObject = await sheet.getRow(i);
            //  let cellObject= await rowObject.getCell(1);
            await console.log(sheet.getRow(i).getCell(1).toString());

        }

        await console.log("***************************");
        let totalCol= await sheet.columnCount
        for(let i =2;i<=totalCol;i++)
        {
            //  let rowObject = await sheet.getRow(i);
            //  let cellObject= await rowObject.getCell(1);
            await console.log(sheet.getRow(1).getCell(i).toString());

        }

        await console.log("*********Writing to Excel******************");
        await wb.xlsx.readFile("./ExcelFiles/Book.xlsx");
        sheet = await wb.getWorksheet("Sheet1");
        await sheet.getRow(1).getCell(2).value = "first time wring to excel sheet"
        await wb.xlsx.writeFile("./ExcelFiles/Book1.xlsx");
    
        //  let wb =await new Workbook();
        //  await wb.xlsx.readFile("./ExcelFiles/Book.xlsx");
        // let sheet:Worksheet = await wb.getWorksheet("Sheet1");
        // await browser.waitForAngularEnabled (false);
        // await browser.get("https://the-internet.herokuapp.com/");
        await console.log("@@@@@@@@@@@@@");
        await browser.executeScript("arguments[0].scrollIntoView();",element(by.xpath("//a[text()='Form Authentication']")));
        // await browser.actions().mouseMove(element(by.xpath("//a[text()='Form Authentication']"))).perform();
        await browser.element(by.xpath("//a[text()='Form Authentication']")).click();
        await browser.element(by.id("username")).sendKeys("tomsmith");
        await browser.sleep(5000);
        await browser.element(by.id("password")).sendKeys("SuperSecretPassword!");  //---//button[@type="submit"]/i  
        await browser.sleep(5000);
        await browser.element(by.xpath("//button[@type='submit']/i")).click();//---(//div[@class="row"]/div/div)[1]
          await browser.sleep(5000);

        let text= await browser.element(by.xpath("//div[@id='flash']")).getText();//.getAttribute("value");
        await console.log(text);
        await expect(text).toContain("You logged into a secure area!") 
    });


    describe("First describe", async() => {
    beforeAll(async()=>
    {
        console.log("Executing befor each");
         await browser.waitForAngularEnabled (false);
        await browser.get("https://www.w3schools.com/html/html_tables.asp");
    });
   
    
    it("First it", async() => {
        await browser.manage().window().maximize()
        await browser.sleep(5000);
        let rowsize= await browser.element.all(by.xpath("//table[@id='customers']//tr")).count()
        await console.log(rowsize);
        let colsize= await browser.element.all(by.xpath("//table[@id='customers']//tr[1]/th")).count();
        await console.log(colsize);
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
        for(let i=2;i<=rowsize;i++)
        {
           
            let country= await browser.element(by.xpath("//table[@id='customers']//tr["+i+"]/td[3]")).getText();
            // list.add(country)
            await console.log(country); 

            if(country=="Mexico")
            {
               await console.log("mexico is present at row " +i); 
               break;
            }
            if(i==rowsize)
            {
                 await console.log("mexico not found"); 
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
    });

    });
    it("Second it", async() => {
       
        await console.log("@@@@@@@@@@@@@");
        await browser.executeScript("arguments[0].scrollIntoView();",element(by.xpath("//a[text()='Form Authentication']")));
        // await browser.actions().mouseMove(element(by.xpath("//a[text()='Form Authentication']"))).perform();
        await browser.element(by.xpath("//a[text()='Form Authentication']")).click();
        await browser.element(by.id("username")).sendKeys("tomsmith");
        await browser.sleep(5000);
        await browser.element(by.id("password")).sendKeys("SuperSecretPassword!");  //---//button[@type="submit"]/i  
        await browser.sleep(5000);
        
        await browser.element(by.xpath("//button[@type='submit']/i")).click();//---(//div[@class="row"]/div/div)[1]
          await browser.sleep(5000);
        //await browser.wait(ExpectedCondition.presenceOf(element(by.xpath("//div[@id='flash']"))))
        let text= await browser.element(by.xpath("//div[@id='flash']")).getText();//.getAttribute("value");
        await console.log(text);
        await expect(text).toContain("You logged into a secure area!") 

afterAll(async()=>
    {
        console.log("Executing afterall");
    });
    });
});