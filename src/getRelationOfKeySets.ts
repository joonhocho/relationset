// tslint:disable no-bitwise
import {
  Disjoint,
  DisjointEqual,
  FiniteSet,
  IKeySet,
  Intersecting,
  IntersectingEqual,
  IntersectingSubset,
  IntersectingSuperset,
  Subset,
  Superset,
} from './const';

const { keys } = Object;

export const getRelationOfKeySets = (
  a: IKeySet,
  b: IKeySet,
  aKeys: FiniteSet = keys(a),
  bKeys: FiniteSet = keys(b)
): number => {
  const aLen = aKeys.length;
  const bLen = bKeys.length;

  if (aLen === 0) {
    if (bLen === 0) {
      return DisjointEqual;
    }
    return Subset;
  }
  if (bLen === 0) {
    return Superset;
  }

  let intersects = 0;
  let aOnly = 0;
  let bOnly = 0;

  if (aLen <= bLen) {
    // check shorter keys first
    for (let i = 0; i < aLen; i += 1) {
      if (b[aKeys[i]] === 1) {
        intersects = 1;
        if (aOnly === 1) {
          break;
        }
      } else {
        aOnly = 1;
        if (intersects === 1) {
          break;
        }
      }
    }

    if (intersects === 0) {
      return Disjoint;
    }

    for (let i = 0; i < bLen; i += 1) {
      if (a[bKeys[i]] !== 1) {
        bOnly = 1;
        break;
      }
    }
  } else {
    for (let i = 0; i < bLen; i += 1) {
      if (a[bKeys[i]] === 1) {
        intersects = 1;
        if (bOnly === 1) {
          break;
        }
      } else {
        bOnly = 1;
        if (intersects === 1) {
          break;
        }
      }
    }

    if (intersects === 0) {
      return Disjoint;
    }

    for (let i = 0; i < aLen; i += 1) {
      if (b[aKeys[i]] !== 1) {
        aOnly = 1;
        break;
      }
    }
  }

  if (aOnly === 1) {
    if (bOnly === 1) {
      return Intersecting;
    }
    return IntersectingSuperset;
  }

  if (bOnly === 1) {
    return IntersectingSubset;
  }

  return IntersectingEqual;
};
