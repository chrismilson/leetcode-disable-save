# Leetcode Disable Save

When coding I often unconsciously press <kbd>Ctrl</kbd> + <kbd>S</kbd> in order
to save my work. On leetcode however, I will often accidentally save the
webpage, as my code is automatically saved.

After downloading `Explore - LeetCode.html` for the umpteenth time I decided
that enough was enough.

This Chrome extension will prevent any <kbd>Ctrl</kbd> + <kbd>S</kbd> or
<kbd>Command</kbd> + <kbd>S</kbd> actions on all `https://leetcode.com/*`
domains.

# Usage

## Browser Extension

The browser extension is not available on any stores yet, you can only
install it via [developer
mode](https://developer.chrome.com/extensions/getstarted#manifest).

## JS Marklet

_This works for any webpage, not just leetcode.com_

If you don't want to have a browser extension, you can use the code in
`disable-save.js` as a marklet. Marklets are a way of injecting javascript into
a webpage via the address bar.

If you only want to run the script once:

1. Copy the contents of `disable-save.js`.
2. Clear your address bar, and add `javascript:`, followed by pasting the
   contents of `disable-save.js`.
3. Press enter, and the script will be run on the page, disabling the
   <kbd>Ctrl</kbd> + <kbd>S</kbd> key combination for the remainder of the
   session.

Reloading the page however will revert to the normal <kbd>Ctrl</kbd> +
<kbd>S</kbd> functionality.

If you find that you want to use the marklet version often, you can create a
browser bookmark in where the url is

```
  javascript:<CONTENTS OF disable-save.js>
```

and use that instead of copy/pasting every time.
