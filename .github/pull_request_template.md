## Summary of Changes
1. a
2. b
3. c

## Review
Open up the preview site (see the below netlify comment below) and navigate to:
- /page

## Ticket(s)
FEG-999

## Pull Request npm task ran

[ ] Has the pull request npm task been ran?

This will run the unit tests, lint the repo, run prettier and audit the file sizes.

## Checklist

The below needs to be done before a pull request can be approved:

- [ ] New components work as a Web component and a Vue component
- [ ] New vue components added as an export in src/index.js
- [ ] New components/features have sufficient unit tests
- [ ] New components/features have sufficient documentation
- [ ] New component has dataLayer events added
- [ ] New component is added to the components.json file so it is picked up in the rollup config file

## Accesibility check list

- [ ] New components/features are accessible to keyboard users (All links/buttons are tabbable, All content is accessible)
- [ ] New components/features are accessible to non-JS users (All links/buttons are tabbable, All content is accessible), this may have visual differences
- [ ] New components/features have hover, focus and active states on all the links/buttons
- [ ] New components/features work when in dark mode and high contrast mode. Buttons, links and icons should still look like what they are.
