stated-promise / [Exports](modules.md)

# StatedPromsie

StatedPromise provides a couple of methods for querying Promise state.

## Installation

```shell
npm i stated-promise
```

## Usage

```typesript
import { StatedPromise } from 'stated-promise'

const statedPromise = new StatedPromise(Promise.resolve(...))

if (statedPromise.isPending()) {
  // wait
} else {
  // promise fulfilled
  statedPromise.getPromise().then(...)
}
```
