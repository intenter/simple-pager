# simple-pager
simple-pager is the small and simple pager library for node. It doesn't do any rendering instead it generates data model
you can use in any way in your with your template engine or with any other tools.

## Installation

```bash
npm install simple-pager
```

## Usage
```js
var pager = require('simple-pager');
var pagesModel = pager.getPagesModel(4, 10);
```
The pagesModel will look like this:
```js
[
  { page: 3 },
  { page: 4, current: true },
  { page: 5 }
]
```

The first page number is 1. Zero page is considered to be out of the valid pages range.

In fact getPagesModel is the only method exposed by the module:
```js
  getPagesModel(currentPage, totalPages [, options])
```
If you don't pass any options by default this method generates a list with the current page and couple of surrounding pages.
Current page marked by the corresponding boolean property. 
Here is the full set of the available options with default values:
```js
{
  surroundWith: 1, 
  outputFirst: false, 
  outputLast: false
}
```
* `surroundWith` - number of pages to output before and after the current
* `outputFirst` - whether the first page should be present in the result array
* `outputLast` - whether the last page should be present in the result array
