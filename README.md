# NordPass-homework

NordPass UI Automation Challenge

## Prerequisites

* NodeJs - I've used v23.18.0
* Highly suggest using NVM (Node Version Manager) for easier Node version tracking
* Npm package manager

## Initial Setup

* Before running tests run `npm install` to pull all required dependencies

* To run tests use `npm run test` command

## Code management

* Repository have clean code management tools like `prettier` and `eslint`

* To compile Typescript code - run command `npm run compile`

* To run eslint code checks - run command `npm run lint`

* To run prettier code checks - run command `npm run format`

* To run compile and both eslint/prettier checks at once - run command `npm run check`.
Highly suggest to run all checks before commiting code since repository doesn't have Husky precommit hooks.

## Notes

* `should successfully send filled form` test is currently flaking due to Captcha. I left the test from a code perspective is correct. Issue comes from running it on Production environment where tools to prevent automated behaviour are installed. Running this test on proper Test environment with automation preventive tools disabled should be without any issues.

* I chose to automate some of Landing Page flows and Get Quote form. Landing Page is pretty obvious choise - first impression is the most valuable, if something wrong goes on the landging page it's very unlikely that user will continue or choose your product in the end. 

* Since I believe most revenue comes business client - next choice was Get Quote form. It's a good and effortless way for business clients to get the pricing and all the information they need. So this form is also highly representitive of your product. All issues or unfriendly design might scare the potential client, so this form must work flawlessly.

* If visual test is not working - please update snapshots with command `npx playwright test --update-snapshots`.

* Html report should start automatically after test run has finished. If not the latest report cant be found in `playwright-report` folder.