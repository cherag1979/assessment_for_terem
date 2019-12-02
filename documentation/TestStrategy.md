# High Level Test Strategy

Test Approach:
Unit testing will be done by developers. Integration and end to end system test, regression and performance testing will be done by QA.
Backend API testing will be done prior to the UI testing.
API endpoints that could potentially be bottleneck will be identified and will be the candidates for Load/Stress testing.
Start of every sprint, the user stories in the scope of sprint will be understood and feature scenarios will be written covering all the Acceptance criteria. The scenarios will be automated using the automation framework created using cypress and cucumberJS.
QA task card will be created for every user story and will be marked as done once all the scenarios are manually tested as part of functional testing.
Task cards for Automation will be created every sprint which will form the regression tests. These will grow as more and more features get added to the app.


Testing tools:
API Testing - Python Behave or Postman
Load / Stress Testing - Locust.io
UI Testing - Cypress + Cucumber


Test deliverables:
Test Execution Summary will be generated for every release candidate. This will list all the features that were executed along with screenshots or videos. The test results from the automated regression tests will be appended.


Environment / Deployment Strategy:
3 isolated environments shall be available at a minimum. DEV, UAT and PROD
DEV will be used by developers to deploy and unit test
UAT will be used by QAs, Automation Engineer or PO

Devs will create feature branch from Develop branch which will then be merged to Develop after Pull Request is created, reviewed, approved and unit tests are passing. Once ready, the Release branch will be made from Develop and deployed to UAT. After all the manual functional, non functional and automated regression tests are passing. The code will then be merged to master whereby it will be deployed to PROD.
