
import {Config,browser} from "protractor";

// import 

export const config: Config={

framework:'jasmine',
// frameworkPath: require.resolve("protractor-cucumber-framework"),

directConnect:true,

capabilities:{
    browserName:'chrome',
    
},
onPrepare: () =>
    {
        browser.waitForAngularEnabled (false);
    },

specs:["./specs/demo_spec.js"],






}