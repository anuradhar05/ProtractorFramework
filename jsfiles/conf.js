"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
// import 
exports.config = {
    framework: 'custom',
    frameworkPath: require.resolve("protractor-cucumber-framework"),
    directConnect: true,
    capabilities: {
        browserName: 'chrome',
    },
    specs: ["../features/demo.feature"],
    cucumberOptions: {
        // Step definitions
        require: ["stepDefinition.ts", "stepDef1.ts"],
    }
};
