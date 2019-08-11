// tslint:disable no-bitwise no-console
import {
  Disjoint,
  Equal,
  FiniteSet,
  Intersecting,
  Subset,
  Superset,
} from './const';
import { getRelationOfUnitSetToNonEmptySet } from './getRelationOfUnitSetToNonEmptySet';

test('getRelationOfUnitSetToNonEmptySet', () => {
  const run = (a: FiniteSet, b: FiniteSet, expected: number): any =>
    expect(getRelationOfUnitSetToNonEmptySet(a[0], b)).toBe(expected);

  run([1], [0], Disjoint);
  run([1], [1], Intersecting | Subset | Superset | Equal);
  run([0], [1, 2], Disjoint);
  run([1], [1, 2], Intersecting | Subset);
  run([2], [1, 2], Intersecting | Subset);
  run([3], [1, 2], Disjoint);
});
