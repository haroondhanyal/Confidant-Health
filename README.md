# Confidant Health Automation Framework

## Mobile Functional & Regression Automation

The `master` branch of Confidant Health contains the mobile automation baseline used to validate application functionality through structured and repeatable automated test scenarios.

This branch should remain focused on stable regression scenarios, reusable automation components, application-level validations, and test evidence generation.

## Purpose

The framework is intended to automate repetitive mobile QA activities and provide dependable validation for Confidant Health releases.

Primary goals:

- Validate critical application flows
- Improve regression consistency
- Reduce repetitive manual testing
- Maintain reusable automation logic
- Generate traceable test results
- Improve defect investigation
- Support release verification
- Prepare automation for CI/CD execution

## Scope

Automation may include:

```text
Authentication
Onboarding
Home/Dashboard
Navigation
Profile
Forms
Appointments
Healthcare workflows
Notifications
Settings
Logout
Error handling
```

The suite should validate both successful and unsuccessful user behavior.

## Automation Layers

Recommended architecture:

```text
Tests
   ↓
Business Flows
   ↓
Screen Objects
   ↓
Reusable Actions
   ↓
Locators
   ↓
Mobile Application
```

This separation prevents test cases from becoming tightly coupled to individual UI elements.

## Suggested Project Structure

```text
Confidant-Health/
│
├── src/
│   ├── screens/
│   ├── tests/
│   ├── flows/
│   ├── utils/
│   ├── config/
│   └── data/
│
├── resources/
│
├── reports/
│
├── screenshots/
│
├── logs/
│
└── README.md
```

The final README should preserve the actual folder names used by the repository.

## Test Architecture

Each test should follow a simple structure:

```text
Arrange
↓
Act
↓
Assert
↓
Cleanup
```

Example:

```text
Prepare authenticated user
↓
Navigate to profile
↓
Update supported field
↓
Save changes
↓
Validate updated value
```

## Reusable Screen Objects

Create dedicated objects for major screens.

Example:

```text
LoginScreen
HomeScreen
ProfileScreen
AppointmentScreen
SettingsScreen
```

Each screen object should contain:

- Element definitions
- Screen-specific actions
- Visibility checks
- Reusable validation helpers

Business assertions should remain understandable from the test layer.

## Locator Strategy

Use stable application identifiers wherever available.

Preferred locator order:

```text
Accessibility/Test ID
Stable Resource ID
Semantic Locator
Platform-specific stable locator
XPath only when necessary
```

Avoid fragile locators based on:

- Screen position
- Dynamic hierarchy
- Long XPath expressions
- Temporary text values

## Test Classification

### Smoke Tests

Short set of critical flows used for build verification.

### Sanity Tests

Targeted validation following minor changes.

### Functional Tests

Feature-level business behavior.

### Regression Tests

Broader validation before release.

### Negative Tests

Invalid inputs, required fields, unauthorized actions, and error behavior.

### End-to-End Tests

Complete workflows spanning multiple application areas.

## Assertions

Every automated scenario must contain meaningful assertions.

Validate outcomes such as:

- Correct screen displayed
- Expected user authenticated
- Validation message shown
- Data successfully saved
- Navigation completed
- Expected status returned

Avoid tests that perform actions without validating results.

## Test Data Management

Keep test data external wherever practical.

Possible structure:

```text
test-data/
├── users
├── profiles
├── appointments
└── validation-data
```

Do not commit real patient information, credentials, authentication tokens, or other sensitive data.

Use test or synthetic data only.

## Configuration Management

Maintain configuration separately for:

```text
Environment
Device
Application Build
Timeout
Test User
Report Path
Screenshot Path
```

This allows the same test suite to execute against multiple environments.

## Execution Strategy

Typical execution:

```text
Start Emulator/Device
      ↓
Install Application
      ↓
Initialize Automation Session
      ↓
Execute Selected Suite
      ↓
Capture Results
      ↓
Generate Report
      ↓
End Session
```

## Reporting

Test reports should communicate:

```text
Total Tests
Passed
Failed
Skipped
Execution Time
Failure Details
```

Where supported, attach:

- Screenshots
- Logs
- Stack traces
- Device details

## Screenshot Strategy

Automatically capture screenshots for failures.

Filename example:

```text
TC_LOGIN_002_invalid_credentials.png
```

Screenshots should make it possible to understand what the application displayed when the scenario failed.

## Logging

Use structured logs such as:

```text
INFO  Test started
INFO  Login screen displayed
INFO  Credentials entered
INFO  Login submitted
ERROR Expected dashboard was not displayed
```

Sensitive values must be masked.

## Wait Strategy

Do not depend heavily on static sleeps.

Use smart waits based on application state.

Examples:

```text
Wait until visible
Wait until clickable
Wait until screen loaded
Wait until text appears
```

This improves stability across devices with different performance.

## Test Independence

Tests should not rely unnecessarily on the execution order of previous tests.

Bad:

```text
Test B requires Test A to have run.
```

Preferred:

```text
Each test creates or prepares its own required state.
```

## Error Evidence

Failure workflow:

```text
Assertion Failure
      ↓
Capture Screenshot
      ↓
Write Logs
      ↓
Record Device Details
      ↓
Attach Evidence
      ↓
Report Failure
```

## VS Code Workflow

Recommended development process:

```text
Clone
↓
Open in VS Code
↓
Install required dependencies
↓
Configure test device
↓
Configure environment
↓
Execute test suite
↓
Review report
```

Repository:

```text
https://github.com/haroondhanyal/Confidant-Health
```

Branch:

```text
master
```

## CI/CD Integration

The framework should remain compatible with automation pipelines.

Recommended pipeline stages:

```text
Checkout
↓
Install Dependencies
↓
Start/Connect Device
↓
Install Build
↓
Run Smoke Suite
↓
Run Selected Regression
↓
Publish Report
↓
Archive Evidence
```

## Recommended Future Improvements

- Parallel execution
- Android/iOS execution profiles
- Real-device cloud integration
- Test tagging
- Retry analysis
- Rich HTML reporting
- Video capture
- API-based preconditions
- Automated test-data creation
- CI pipeline integration
- Scheduled regression
- Release-gate smoke testing
- Device capability configuration
- Flaky-test reporting

## Security & Healthcare Test Data

Because Confidant Health relates to healthcare workflows:

- Use synthetic test users
- Never commit real patient data
- Mask authentication information
- Avoid sensitive values in screenshots
- Avoid credentials in source control
- Protect environment configuration

## Definition of a Good Automated Test

A good Confidant Health test should be:

```text
Readable
Independent
Repeatable
Maintainable
Deterministic
Evidence-generating
Business-focused
```

## Final Goal

The Confidant Health automation framework should provide a dependable mobile regression layer that helps identify defects early, verify critical healthcare workflows consistently, reduce manual repetition, and provide clear execution evidence before application releases.
