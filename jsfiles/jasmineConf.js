"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const protractor_1 = require("protractor");
// import 
exports.config = {
    framework: 'jasmine',
    // frameworkPath: require.resolve("protractor-cucumber-framework"),
    directConnect: true,
    capabilities: {
        browserName: 'chrome',
    },
    onPrepare: () => {
        protractor_1.browser.waitForAngularEnabled(false);
    },
    specs: ["./specs/demo_spec.js"],
};
