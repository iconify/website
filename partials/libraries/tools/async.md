If you are not familiar with asynchronous functions in JavaScript, read up on `[type]Promise` class, `[func]async` and `[func]await` keywords.

The simplest way to use asynchronous functions is to wrap all your code in anonymous asynchronous function, then `[func]await` functions:

```ts
const iconSet = await importDirectory('files/svg', {
    prefix: 'test',
});
```

To catch errors, use `[func]try` and `[func]catch`:

```ts
let iconSet: IconSet;
try {
    iconSet = await importDirectory('files/svg', {
        prefix: 'test',
    });
} catch (err) {
    console.error(`Failed to import directory:`, err);
    return;
}
```

Check out various tutorials for `[func]async` and `[func]await`. There are many free good tutorials on YouTube.
