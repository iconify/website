```yaml
title: 'Importing SVG from Figma: Getting access token'
standalone: true
navigation: './index.md'
functions:
  importFromFigma: ./index.md
```

# How to get Figma API access token

This article is part of `[func]importFromFigma()` documentation.

How to get Figma API access token:

1. Open Figma.
2. Select "Home" button in top left corner if you are not on home page.
3. Click your name in top right corner to see account menu.
4. Select "Settings".
5. In settings window click "Account".
6. Scroll to "Personal access tokens", in token name type something then hit enter key.

You should see new token. Copy it.

If you at some point would want to remove token, follow steps above. Below form to generate new tokens, you'll see list of all tokens. From there you can remove tokens.

Never commit token to a repository or publish it anywhere! Keep it secret. There are many ways to keep token secret, most common is using environmental variables to pass token to script. There are plenty of tutorials available that explain different methods.
