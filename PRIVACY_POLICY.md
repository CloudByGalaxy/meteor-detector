# Privacy Policy - Meteor Detector

## What this extension does

Meteor Detector checks whether the website you are visiting is built with the MeteorJS framework. When detected, it displays the Meteor version and a list of known Meteor packages used by the site.

## Data collected

The extension reads the following information from the current page's JavaScript context:

- Whether the `Meteor` global object exists
- The Meteor release version string (e.g. "METEOR@3.4")
- Which known Atmosphere packages are loaded

## How data is used

All detected information is used solely to display the Meteor version badge and the package list in the extension popup. Data is stored temporarily in memory for the active browser tab and is automatically discarded when the tab is closed or navigated away.

## Data sharing

This extension does not transmit, share, or send any data to external servers, third parties, or analytics services. All processing happens locally in your browser.

## Personal data

This extension does not collect, store, or process any personal data, browsing history, credentials, or user-identifiable information.

## Permissions

- **activeTab** — Used to access the current tab for badge display.
- **scripting** — Used to inject the detection script into the page context, which is required to read the page's `Meteor` and `Package` globals.

## Changes to this policy

If this privacy policy is updated, the changes will be reflected on this page.

*Last updated: January 2026*
