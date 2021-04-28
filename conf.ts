
import {Config} from "protractor";

// import 

export const config: Config={

framework:'custom',
frameworkPath: require.resolve("protractor-cucumber-framework"),

directConnect:true,

capabilities:{
    browserName:'chrome',
    
},


specs:["../features/demo.feature"],


cucumberOptions:{
    // Step definitions
    require: ["stepDefinition.ts","stepDef1.ts"],

}


}