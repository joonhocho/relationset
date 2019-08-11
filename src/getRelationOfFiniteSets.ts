// tslint:disable no-bitwise
import {
  DisjointEqual,
  FiniteSet,
  IKeySet,
  IntersectingSubset,
  IntersectingSuperset,
  Subset,
  Superset,
} from './const';
import { getRelationOfKeySets } from './getRelationOfKeySets';
import { getRelationOfUnitSetToNonEmptySet } from './getRelationOfUnitSetToNonEmptySet';

export const getRelationOfFiniteSets = <T extends FiniteSet>(
  a: T,
  b: T
): number => {
  const aLen = a.length;
  const bLen = b.length;

  if (aLen === 0) {
    if (bLen === 0) {
      return DisjointEqual;
    }
    return Subset;
  }

  if (bLen === 0) {
    return Superset;
  }

  if (aLen === 1) {
    return getRelationOfUnitSetToNonEmptySet(a[0], b);
  }

  if (bLen === 1) {
    const rel = getRelationOfUnitSetToNonEmptySet(b[0], a);
    return rel === IntersectingSubset ? IntersectingSuperset : rel;
  }

  const aMap: IKeySet = {};
  for (let i = 0; i < aLen; i += 1) {
    aMap[a[i]] = 1;
  }

  const bMap: IKeySet = {};
  for (let i = 0; i < bLen; i += 1) {
    bMap[b[i]] = 1;
  }

  return getRelationOfKeySets(aMap, bMap, a, b);
};
