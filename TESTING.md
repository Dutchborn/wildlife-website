
# 🌍 Wildlife Wonders Testing

**[Visit Wildlife Wonders](https://dutchborn.github.io/wildlife-website/)**

![ScreenShot of Home Page Hero on different devices ](assets/documentation/wildlifeWonder.png)

- - -

## CONTENTS

- [Solved Bugs](#solved-bugs)
- [Automated Testing](#automated-testing)
    * [W3C CSS Validator](#w3c-css-validator)
    * [W3C HTML Validator](#w3c-html-validator)
    * [Js Validator](#js-validator)
- [Performace Testing](#perfomance-testing)
    * [Steps taken to Improve Performace](#steps-taken-to-improve-performance)
    * [Performace Score Research](#perfomrance-score-research)
- [Accesibility Testing](#accesibility-testing)
    * [Steps Taken to Improve Accesibililty](#steps-taken-to-improve-accesibility)
- [SEO](#seo)
    * [Steps Taken to Improve SEO](#steps-taken-to-imporve-seo)
- [Manual Testing](#manual-testing)
    * [Full Testing](#full-testing)


## Solved Bugs

| Bug | Solution |
| ---| ----|
|hero video was not playing in mobile| added playsinline tag to video|

I did not encounter many bugs as this is a static page, most issues were solved during the development cycle

## Automated Testing 

### W3C CSS Validator

Used [W3C Schools CSS validator]()

![CSS validation test]()

### W3C HTML validator 

used [W3C Nu HTML Checker](https://validator.w3.org/)

please refer to the w3c-html-tests folder in the the documentation folder to view detailed tests before and after changes

-> [index.html](): Passed all tests

-> [about-us.html](): Passed all tests

-> [subsidiaries.html](): Passed all test

-> [corporate-responsibility.html](): Passed all tests

-> [investor-relations.html](): Passed all tests

-> [contact-us.html](): Passed all tests

-> [careers.html](): Passed all tests

-> [under-construction.html](): Passed all tests

### JS Validator

used [JsHint](https://jshint.com/) to validate main.js file

-> main.js: **Passed**

![Js Validator]()

## Perfomance Testing

Used [Google Lightouse](https://developer.chrome.com/docs/lighthouse/overview) for testing

scores are defined by Google as follows

![Google Lighouse Score Breakdown]()
[source]()

- scores where obtained by running Lighthouse on Chrome Developer on each page around 5 for mobhile and desktop times and the highest score was taken. From this it is important ot note that the Lighthouse score can vary each time yoou run the test thus should be taken as a metric and not an absolute.

-> **Home Page**

|Desktop|Mobile|
|:-:|:-:|
|<img width="360" alt="Test Desktop" src="documentation/lighthouse-test/pages-tests/lightouse-test-home-page-desktop.png">|<img width="360" alt="Test Mobile" src="documentation/lighthouse-test/pages-tests/lightouse-test-home-page-mobile.png">|

-> **About Us Page**

|Desktop|Mobile|
|:-:|:-:|
|<img width="360" alt="Test Desktop" src="documentation/lighthouse-test/pages-tests/lightouse-test-about-us-page-desktop.png">|<img width="360" alt="Test Mobile" src="documentation/lighthouse-test/pages-tests/lightouse-test-about-us-page-mobile.png">|

-> **Subsidiaries Page**

|Desktop|Mobile|
|:-:|:-:|
|<img width="360" alt="Test Desktop" src="documentation/lighthouse-test/pages-tests/lightouse-test-subsidiaries-page-desktop.png">|<img width="360" alt="Test Mobile" src="documentation/lighthouse-test/pages-tests/lightouse-test-subsidiaries-page-mobile.png">|

-> **Corporate Responsibility Page**

|Desktop|Mobile|
|:-:|:-:|
|<img width="360" alt="Test Desktop" src="documentation/lighthouse-test/pages-tests/lightouse-test-corporate-responsibility-page-desktop.png">|<img width="360" alt="Test Mobile" src="documentation/lighthouse-test/pages-tests/lightouse-test-corporate-responsibility-page-mobile.png">|

-> **Investor Relations Page**

|Desktop|Mobile|
|:-:|:-:|
|<img width="360" alt="Test Desktop" src="documentation/lighthouse-test/pages-tests/lightouse-test-investor-relations-page-desktop.png">|<img width="360" alt="Test Mobile" src="documentation/lighthouse-test/pages-tests/lightouse-test-investor-relations-page-mobile.png">|

-> **Contact Page**

|Desktop|Mobile|
|:-:|:-:|
|<img width="360" alt="Test Desktop" src="documentation/lighthouse-test/pages-tests/lightouse-test-contact-page-desktop.png">|<img width="360" alt="Test Mobile" src="documentation/lighthouse-test/pages-tests/lightouse-test-contact-page-mobile.png">|

-> **Careers Page**

|Desktop|Mobile|
|:-:|:-:|
|<img width="360" alt="Test Desktop" src="documentation/lighthouse-test/pages-tests/lightouse-test-careers-page-desktop.png">|<img width="360" alt="Test Mobile" src="documentation/lighthouse-test/pages-tests/lightouse-test-careers-page-mobile.png">|

-> **Under Construction Page**

|Desktop|Mobile|
|:-:|:-:|
|<img width="360" alt="Test Desktop" src="documentation/lighthouse-test/pages-tests/lightouse-test-under-construction-page-desktop.png">|<img width="360" alt="Test Mobile" src="documentation/lighthouse-test/pages-tests/lightouse-test-under-construction-page-mobile.png">|


-> **Home Page Accesibililty Audit**

![Home Page Accesibililty Audit](documentation/accesibility-tests/accesibility-audits/accesibility-audit-home-page.png)

-> **About Us Page Accesibililty Audit**

![About Us Page Accesibililty Audit](documentation/accesibility-tests/accesibility-audits/accesibility-audit-about-us-page.png)

-> **Subsidiaries Page Accesibililty Audit**

![Subsidiaries Page Accesibililty Audit](documentation/accesibility-tests/accesibility-audits/accesibility-audit-subsidiaries-page.png)

-> **Corporate Responsibility Page Accesibililty Audit**

![Corporate Responsibility Page Accesibililty Audit](documentation/accesibility-tests/accesibility-audits/accesibility-audit-corporate-responsibility-page.png)

-> **Investor Relations Page Accesibililty Audit**

![Investor Relations Page Accesibililty Audit](documentation/accesibility-tests/accesibility-audits/accesibility-audit-investor-relations-page.png)

-> **Contact Page Accesibililty Audit**

![Contact Page Accesibililty Audit](documentation/accesibility-tests/accesibility-audits/accesibility-audit-contact-page.png)

-> **Careers Page Accesibililty Audit**

![Careers Page Accesibililty Audit](documentation/accesibility-tests/accesibility-audits/accesibility-audit-careers-page.png)

-> **Under Construction Page Accesibililty Audit**

![Under Construction Page Accesibililty Audit](documentation/accesibility-tests/accesibility-audits/accesibility-audit-under-construction-page.png)


### Steps taken to improve Accesibility

- used <code>title</code> attribute on links
- used <code>span</code> instead of <code>i</code> for icons

these two saw improvements in Accesibillity results on both the Audit and the AC checker

|Before|After|
|:-:|:-:|
|<img width="360" alt=" AC Test Before" src="documentation/accesibility-tests/improvement-showcase/accesibility-improvement-ac-before.png">|<img width="360" alt="AC Test After" src="documentation/accesibility-tests/improvement-showcase/accesibility-improvement-ac-after.png">|
|<img width="360" alt=" Audit Test Before" src="documentation/accesibility-tests/improvement-showcase/accesibility-improvement-audit-before.png">|<img width="360" alt="Audit Test After" src="documentation/accesibility-tests/improvement-showcase/accesibility-improvement-audit-after.png">|

## SEO

### Steps taken to imporve SEO

-> added meta description tags to each page in the website
 - this increase the SEO score in lighthouse from 82 to 91



### Full Testing

# ✅ Wildlife Wonders – Full Testing Log

This document outlines the detailed testing process and outcomes across all major pages and features of the Wildlife Wonders website.

---

## 💻 Devices Used

* MacBook Pro 13" (with 27" external monitor)
* iPhone 15
* iPhone 13 Pro Max
* iPad Pro 12"

## 🌐 Browsers Tested

* Chrome (latest)
* Safari (Mac)
* Firefox (Mac)

---

## 🏠 Index/Home Page

| Feature               | Expected Outcome                  | Test Performed                    | Result                          | Pass/Fail |
| --------------------- | --------------------------------- | --------------------------------- | ------------------------------- | --------- |
| Hero Video            | Background video loads on desktop | Loaded page on multiple viewports | Video plays smoothly            | ✅ Pass    |
| Hero Button           | CTA navigates to animals.html     | Clicked CTA on all devices        | Scrolled smoothly to section    | ✅ Pass    |
| Carousel              | Rotates on hover after delay      | Hovered on category               | Rotated correctly               | ✅ Pass    |
| Animated Counters     | Trigger on scroll                 | Scrolled to counters              | Counters animated correctly     | ✅ Pass    |
| Navigation            | Links scroll/redirect correctly   | Clicked each nav link             | All sections linked properly    | ✅ Pass    |
| Mobile Responsiveness | Nav collapses into burger menu    | Opened on phone and tablet        | Burger menu functions correctly | ✅ Pass    |

---

## 🐾 Animals Page

| Feature              | Expected Outcome             | Test Performed                 | Result                     | Pass/Fail |
| -------------------- | ---------------------------- | ------------------------------ | -------------------------- | --------- |
| Search               | Filters results dynamically  | Typed "lion", "eagle", etc.    | Filtered list updates live | ✅ Pass    |
| Category Filter      | Filters by selected category | Selected Mammal, Reptile, Bird | Animal cards filtered      | ✅ Pass    |
| Load More            | Appends 100 more animals     | Clicked load more 3×           | New cards loaded each time | ✅ Pass    |
| Animal Cards         | Each shows name, image, desc | Viewed various animals         | All data and images shown  | ✅ Pass    |
| Links to Animal Page | Opens detailed view          | Clicked animal name            | Redirected correctly       | ✅ Pass    |
| Responsive Grid      | Cards stack on mobile        | Viewed on phone                | Cards adjust perfectly     | ✅ Pass    |

---

## 🦁 Animal Detail Page (`animal.html?name=`)

| Feature        | Expected Outcome                 | Test Performed                 | Result                      | Pass/Fail |
| -------------- | -------------------------------- | ------------------------------ | --------------------------- | --------- |
| Wikipedia API  | Fetches correct info             | Viewed "Lion", "Penguin", etc. | All data accurate           | ✅ Pass    |
| Error Handling | Displays fallback info           | Typed invalid name             | Message + placeholder shown | ✅ Pass    |
| Styling        | Responsive layout on all screens | Viewed on iPhone, desktop      | Layout scales correctly     | ✅ Pass    |

---

## 📚 Collections Page

| Feature                  | Expected Outcome                 | Test Performed          | Result                      | Pass/Fail |
| ------------------------ | -------------------------------- | ----------------------- | --------------------------- | --------- |
| Category Corners         | 4 themed cards appear in corners | Opened page             | All 4 cards shown           | ✅ Pass    |
| Carousel on Hover        | Appears 2s after hover           | Hovered each category   | Carousel appeared + rotated | ✅ Pass    |
| Clickable Carousel Items | Leads to category pages          | Clicked several options | Redirects correctly         | ✅ Pass    |
| Animations               | Cards animate on hover           | Hovered cards           | Smooth transitions          | ✅ Pass    |
| Mobile Layout            | Content stacks naturally         | Checked on iPhone       | Displayed well              | ✅ Pass    |

---

## 💌 About Page

| Feature         | Expected Outcome           | Test Performed      | Result                  | Pass/Fail |
| --------------- | -------------------------- | ------------------- | ----------------------- | --------- |
| Hero Parallax   | Background scrolls subtly  | Scrolled down page  | Parallax works smoothly | ✅ Pass    |
| Counters        | Animate on view            | Scrolled to section | All counters animated   | ✅ Pass    |
| Form Submission | Submits and redirects      | Entered valid info  | Redirected to Thank You | ✅ Pass    |
| Accessibility   | Labels, alt tags, contrast | Inspected with WAVE | Passed checks           | ✅ Pass    |

---

## ✅ Thank You Page

| Feature    | Expected Outcome        | Test Performed             | Result                 | Pass/Fail |
| ---------- | ----------------------- | -------------------------- | ---------------------- | --------- |
| Message    | Shows confirmation text | Visited after form         | Message displayed      | ✅ Pass    |
| Styling    | Matches website theme   | Checked background + fonts | Visual match confirmed | ✅ Pass    |
| Navigation | Return to home works    | Clicked home link          | Redirected to index    | ✅ Pass    |

---

## 📝 Summary

* All core functionality tested manually on 4 devices and 4 browsers
* Full responsiveness confirmed
* Edge cases handled gracefully (API errors, mobile scaling)
* Future testing enhancements may include Cypress, unit tests, or Lighthouse CI

> Created and verified by: Lesley Asibey, 2025
