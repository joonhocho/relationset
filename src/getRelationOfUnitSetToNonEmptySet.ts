// tslint:disable no-bitwise
import {
  Disjoint,
  Element,
  FiniteSet,
  IntersectingEqual,
  IntersectingSubset,
} from './const';

export const getRelationOfUnitSetToNonEmptySet = (
  element: Element,
  set: FiniteSet
): number => {
  let found = 0;
  let hasMore = 0;

  for (let i = 0, len = set.length; i < len; i += 1) {
    if (set[i] === element) {
      if (hasMore === 1) {
        return IntersectingSubset;
      }
      found = 1;
    } else {
      if (found === 1) {
        return IntersectingSubset;
      }
      hasMore = 1;
    }
  }

  if (found === 1) {
    return IntersectingEqual;
  }

  return Disjoint;
};
