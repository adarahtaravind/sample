module.exports=class Common{



    constructor(){
    
       this.$homePageHeader = () => $(`//h1[text()="Kiss bugs goodbye"]`);
    }
    
    
    
    async launchUrl(){
    
        await browser.url("https://www.qawolf.com/");
        await this.$homePageHeader().waitForDisplayed(5000);
    
        //await browser.pause(2000);
    
    }
    
    
    
    
    }