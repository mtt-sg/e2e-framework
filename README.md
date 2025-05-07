E2E Test Automation Framework
This is an End-to-End (E2E) test automation framework built with Playwright and TypeScript for testing the OrangeHRM application (https://opensource-demo.orangehrmlive.com). It supports UI, API, regression, and performance testing, with cross-browser compatibility, modular design, CI/CD integration, and comprehensive reporting.
Features

Cross-Browser Support: Tests run on Chromium, Firefox, WebKit, and mobile viewports.
Modular Design: Uses Page Object Model (POM) for maintainability and scalability.
Test Types:
UI tests for Login and Search modules.
API tests using Playwright's request module.
Regression tests with tagged scenarios.
Performance tests measuring page load times.


CI/CD Integration: Configured for GitHub Actions, with Allure reporting.
Configurable: Environment-specific settings (e.g., config/dev.json).
Reporting: HTML reports for local runs, Allure reports for CI/CD.

Directory Structure
e2e-framework/
├── config/
│   ├── dev.json
├── src/
│   ├── pages/
│   │   ├── login.page.ts
│   │   ├── search.page.ts
│   ├── tests/
│   │   ├── ui/
│   │   │   ├── login.spec.ts
│   │   │   ├── search.spec.ts
│   │   ├── api/
│   │   │   ├── api.spec.ts
│   │   ├── performance/
│   │   │   ├── perf.spec.ts
├── .github/
│   ├── workflows/
│   │   ├── ci.yml
├── reports/
├── playwright.config.ts
├── package.json
├── tsconfig.json
├── README.md

Prerequisites

Node.js: Version 18 or higher.
Python: Version 3.x (optional, for generating .zip).
Git: For cloning repositories or CI/CD integration.

Setup

Clone or Extract:

Extract e2e-framework.zip or clone the repository.
Navigate to the project directory: cd e2e-framework.


Install Dependencies:
npm install


Install Playwright Browsers:
npx playwright install --with-deps


Configure Environment:

Update config/dev.json with the base URL or credentials if needed.



Running Tests

Run All Tests:npm run test


Run Specific Tests:
UI tests: npm run test:ui
API tests: npm run test:api
Regression tests: npm run test:regression


View Reports:
HTML report: npm run report
Allure report: npm run allure:generate && npm run allure:open



Test Cases

Login Module:
TC_LGN_001: Successful login with valid credentials.
TC_LGN_002: Login with invalid username.
TC_LGN_004: Login with empty username.


Search Module:
TC_SCH_001: Search with valid employee name.
TC_SCH_003: Search with non-existent employee name.


API: Tests a public API endpoint (placeholder).
Performance: Measures login page load time.

CI/CD Integration

Configured for GitHub Actions (see .github/workflows/ci.yml).
Tests run on push/pull requests, with reports uploaded as artifacts.

Extending the Framework

Add Pages: Create new files in src/pages/ using the POM pattern.
Add Tests: Add test files in src/tests/ with appropriate tags (e.g., @regression).
Update Config: Modify playwright.config.ts for new browsers or settings.

Troubleshooting

Tests Fail: Check network connectivity and OrangeHRM URL availability.
Selectors Break: Update locators in src/pages/ if the application’s DOM changes.
CI/CD Issues: Verify GitHub Actions workflow and environment variables.

License
MIT License. Feel free to modify and distribute.
