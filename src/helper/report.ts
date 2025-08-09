const report = require("multiple-cucumber-html-reporter");

report.generate({
    jsonDir: "test-results",
    reportPath: "test-results/reports/",
    reportName: "Playwright Automation Report",
    pageTitle: "Demo test report",
    displayDuration: false,
    metadata: {
        browser: {
            name: "chrome",
            version: "117",
        },
        device: "Mario - PC",
        platform: {
            name: "macOs",
            version: "14.4",
        },
    },
    customData: {
        title: "Test Info",
        data: [
            { label: "Project", value: "Demo Application" },
            { label: "Release", value: "1.2.3" },
            { label: "Cycle", value: "Smoke-1" }
        ],
    },
});