# relationset
Compare two sets (array of items) and get relationships between them (Disjoint | Intersecting | Subset | Superset | Equal).

[![npm version](https://badge.fury.io/js/relationset.svg)](https://badge.fury.io/js/relationset)
[![npm](https://img.shields.io/npm/dw/relationset.svg)](https://www.npmjs.com/package/relationset)
![npm type definitions](https://img.shields.io/npm/types/relationset.svg)
[![Build Status](https://travis-ci.org/joonhocho/relationset.svg?branch=master)](https://travis-ci.org/joonhocho/relationset)
[![Dependency Status](https://david-dm.org/joonhocho/relationset.svg)](https://david-dm.org/joonhocho/relationset)
[![GitHub](https://img.shields.io/github/license/joonhocho/relationset.svg)](https://github.com/joonhocho/relationset/blob/master/LICENSE)

## Get Started
```
npm install -D relationset
```
or
```
yarn add -D relationset
```

## How to Use

```typescript
import {
  getRelationOfFiniteSets,
  getRelationOfKeySets,
  getRelationOfSets,
  getRelationOfUnitSetToNonEmptySet,
  haveCommonElements,
  haveCommonKeys,
} from 'relationset';
```

## License
[MIT License](https://github.com/joonhocho/relationset/blob/master/LICENSE)
