# Playwright-Testdino-Starter

Starter kit with Playwright, ESLint, Prettier, GitHub Actions, and TestDino report upload.

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

If you want to install `tdpw` manually in another project:

```sh
npm install -D tdpw
```

If you haven't installed browsers yet:

```sh
npx playwright install
```

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

1. Sign in to TestDino.
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
- `playwright.config.ts` contains Playwright configuration
- `.github/workflows/test.yml` contains the GitHub Actions workflow
- `package.json` contains scripts and dependencies

This structure is designed to scale to larger test suites, not just a single sample test.

Replace the sample tests and update `baseURL` in `playwright.config.ts` to point to your own application when you start a real project.

---

## License

MIT
