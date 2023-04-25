Usage is almost identical to [using icon bundles in SVG framework](./svg-framework.md) with one major difference: bundle requires importing React component.

That one difference completely changes how bundle behaves. While in SVG framework bundle can be in a separately included script, in React component bundle is similar to any other part of your application that uses React component. That is, it must be bundled with your application.
