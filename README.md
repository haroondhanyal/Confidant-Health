## Automation Overview

Confidant Health Automation is a mobile quality assurance framework designed to validate critical healthcare workflows through reliable, reusable, and maintainable automated testing.

The `master` branch represents the stable automation baseline of the project and is intended to contain dependable regression scenarios, reusable framework components, test utilities, configuration, test data, reporting, and execution support.

The automation suite focuses on important mobile application workflows such as authentication, onboarding, profile management, navigation, forms, appointments, care interactions, notifications, settings, and other business-critical healthcare journeys.

The framework supports:

- Smoke testing
- Sanity testing
- Functional testing
- Regression testing
- Negative validation
- Field-level validation
- Navigation testing
- End-to-end testing

The framework follows a structured automation flow:

```text
Test Scenario
      ↓
Test Data / Configuration
      ↓
Screen or Page Object
      ↓
Reusable Actions
      ↓
Element Locators
      ↓
Mobile Application
      ↓
Validation / Assertion
      ↓
Screenshot & Logs
      ↓
Test Report
```

Test cases are separated from screen objects, locators, test data, utilities, and environment configuration. This keeps automation logic readable, reduces code duplication, and makes application changes easier to maintain.

Execution is designed to support local development through VS Code and future CI/CD pipelines. Test runs should generate clear results including execution status, logs, screenshots, failure evidence, and readable reports to simplify defect investigation.

The framework emphasizes stable element identification, controlled test data, reusable methods, synchronization, meaningful assertions, independent test execution, and traceable evidence.

The master branch should remain focused on stable and verified automation rather than experimental scripts.

The overall goal is to maintain a dependable mobile regression layer that helps identify defects earlier, reduce repetitive manual testing, improve release validation, and provide consistent quality assurance for Confidant Health mobile application releases.
