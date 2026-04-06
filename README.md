# Playwright-Testdino-Starter

Starter kit with Playwright, TestDino reporting, and a project-scoped `testdino-hq/playwright-skill` install that helps testers generate and improve Playwright test cases.

---

## Prerequisites

- [Node.js](https://nodejs.org/) v16+
- [npm](https://www.npmjs.com/)
- TestDino API key for report upload
- GitHub account for GitHub Actions usage

---

## Installation

```sh
npm install
```

This installs all project dependencies, including Playwright and `tdpw`.

## TestDino TDPW Installation

### Using npx (Recommended)

```sh
npx tdpw <command> --token="your-token"
```

### Global Installation

```sh
npm install -g tdpw
tdpw <command> --token="your-token"
```

### Project Dependency

```sh
npm install --save-dev tdpw
```

If you haven't installed browsers yet:

```sh
npx playwright install
```

If you want to install or refresh the TestDino Playwright skill:

```sh
npx skills add testdino-hq/playwright-skill
```

This repo already includes the skill in project scope under:

```text
.agents/skills/playwright-skill
```

The lock entry is tracked in `skills-lock.json`.

---

## Demo Site Under Test

The sample tests in this repo target:

```text
https://storedemo.testdino.com/
```

The current sample suite covers:

- homepage smoke coverage
- catalog navigation and product listing checks
- product detail validation for a featured item
- cart add-to-item behavior

These examples are included to show how testers can use the TestDino Playwright skill to turn manual scenarios into maintainable Playwright tests.

---

## How Testers Can Use This Repo

1. Open this repo in your supported coding agent.
2. Make sure the project-scoped skill is available in `.agents/skills/playwright-skill`.
3. Ask the agent to use `playwright-skill` for the next test you want to create.
4. Review the generated test, run it locally, and refine the scenario.

Good next test ideas for testers:

- verify category navigation from the homepage
- verify wishlist behavior
- verify quantity changes before adding to cart
- verify the reviews or additional information tabs
- verify buy-now behavior if checkout is available

---

## Local Test Execution

Run Playwright tests locally:

```sh
npx playwright test
```

Run only the smoke suite:

```sh
npx playwright test tests/smoke
```

---

## Upload Results to TestDino

First generate the Playwright report:

```sh
npx playwright test
```

This command:

1. runs your Playwright tests
2. creates the Playwright HTML and JSON reports

Then upload the report directly with your token:

```sh
npx tdpw upload ./playwright-report --upload-html --token=YOUR_TESTDINO_TOKEN
```

If you want to run tests first and then upload in one command:

```sh
npx playwright test && npx tdpw upload ./playwright-report --upload-html --token=YOUR_TESTDINO_TOKEN
```

If you are using Windows `cmd`, the most reliable option is:

```bat
npx playwright test && npx tdpw upload .\playwright-report --upload-html --token=YOUR_TESTDINO_TOKEN
```

If you are using PowerShell, the most reliable option is:

```powershell
npx playwright test
npx tdpw upload ./playwright-report --upload-html --token=YOUR_TESTDINO_TOKEN
```

If you are using macOS or Linux:

```sh
npx playwright test && npx tdpw upload ./playwright-report --upload-html --token=YOUR_TESTDINO_TOKEN
```

---

## Get Your TestDino API Key

1. Sign in to [TestDino](https://app.testdino.com/).
2. Create an organization and project.
3. Generate an API key from the project setup or settings page.
4. Copy the key and keep it secret.

---

## GitHub Actions

This repo already includes a workflow at `.github/workflows/test.yml`.

To make GitHub Actions upload results to TestDino:

1. Push this repo to GitHub.
2. Open the repository on GitHub.
3. Go to `Settings` -> `Secrets and variables` -> `Actions`.
4. Create a repository secret named `TESTDINO_TOKEN`.
5. Paste your TestDino API key.
6. Push a commit or open a pull request.

The workflow runs Playwright tests, uploads the Playwright HTML report as an artifact, uploads `test-results` when a run fails, and uploads to TestDino when the `TESTDINO_TOKEN` secret is available.

---

## Using TestDino Playwright Skill

This repository is meant to show testers how `testdino-hq/playwright-skill` can help them create stronger Playwright tests faster.

The skill is useful when you want help with:

- writing or refactoring Playwright tests
- improving locators, assertions, fixtures, or page objects
- debugging flaky tests
- improving CI, sharding, traces, and artifacts

Typical tester prompts:

```text
Use the playwright-skill to create a smoke test for storedemo.testdino.com.
Use the playwright-skill to add a cart test for storedemo.testdino.com.
Use the playwright-skill to improve these Playwright locators and remove flaky waits.
Use the playwright-skill to create a product detail test using web-first assertions.
```

What the skill gives testers:

- better locator strategy guidance, especially `getByRole()` and stable selectors
- safer waiting patterns through web-first assertions instead of fixed delays
- recommendations for structuring smoke, regression, product, and cart flows
- patterns for scaling the suite with fixtures, page objects, debugging, and CI guidance

---

## Useful Commands

```sh
npx playwright test
npm run lint
npm run format
```

---

## Project Structure

- `tests/smoke/` contains fast smoke tests
- `tests/regression/` contains broader regression tests
- `tests/fixtures/` is for shared Playwright fixtures
- `tests/helpers/` is for reusable helpers and utilities
- `.agents/skills/playwright-skill/` contains the project-scoped TestDino Playwright skill
- `skills-lock.json` records the installed skill source
- `playwright.config.ts` contains Playwright configuration
- `.github/workflows/test.yml` contains the GitHub Actions workflow
- `package.json` contains scripts and dependencies

This structure is designed to scale to larger test suites, not just a single sample test.

Replace the sample tests and update `baseURL` in `playwright.config.ts` to point to your own application when you start a real project.

---

## Support

- Documentation: [docs.testdino.com](https://docs.testdino.com/)
- Email: [support@testdino.com](mailto:support@testdino.com)

---

## License

MIT
