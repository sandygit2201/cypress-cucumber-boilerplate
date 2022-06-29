const reporter = require('multiple-cucumber-html-reporter')
const os  = process.platform

options =  ({

    jsonDir: "cypress/cucumber-json/",
    reportPath: "cypress/reports/",
    metadata:{
        browser:{
            name:"chrome",
            veresion:"79"
        },
        device:'Local cypress Execution',
        platform:{
            name: "macOS"
        },
        customData: {
            title:"Cypress Execution Report",
            data:[
                {label:'Project',value:'Work Wear Group'}
            ]
        }
    }
});

reporter.generate(options)


