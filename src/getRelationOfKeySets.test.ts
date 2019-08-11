// tslint:disable no-bitwise no-console
import {
  Disjoint,
  Equal,
  FiniteSet,
  Intersecting,
  Subset,
  Superset,
} from './const';
import { getRelationOfKeySets } from './getRelationOfKeySets';

const toKeys = (a: FiniteSet): any => {
  const map: any = {};
  for (let i = 0, len = a.length; i < len; i += 1) {
    map[a[i]] = 1;
  }
  return map;
};

test('getRelationOfKeySets', () => {
  const run = (a: FiniteSet, b: FiniteSet, expected: number): any =>
    expect(getRelationOfKeySets(toKeys(a), toKeys(b))).toBe(expected);

  run([], [], Subset | Superset | Equal);

  run([1], [], Superset);
  run([], [1], Subset);

  run([1, 2], [0], Disjoint);
  run([1, 2], [1], Intersecting | Superset);
  run([1, 2], [2], Intersecting | Superset);
  run([1, 2], [3], Disjoint);

  run([0], [1, 2], Disjoint);
  run([1], [1, 2], Intersecting | Subset);
  run([2], [1, 2], Intersecting | Subset);
  run([3], [1, 2], Disjoint);

  run([1, 2], [-1, 0], Disjoint);
  run([1, 2], [0, 1], Intersecting);
  run([1, 2], [1, 2], Intersecting | Subset | Superset | Equal);
  run([1, 2], [2, 3], Intersecting);
  run([1, 2], [3, 4], Disjoint);

  run([1, 2, 3], [-1, 0], Disjoint);
  run([1, 2, 3], [0, 1], Intersecting);
  run([1, 2, 3], [1, 2], Intersecting | Superset);
  run([1, 2, 3], [2, 3], Intersecting | Superset);
  run([1, 2, 3], [3, 4], Intersecting);
  run([1, 2, 3], [4, 5], Disjoint);

  run([-1, 0], [1, 2, 3], Disjoint);
  run([0, 1], [1, 2, 3], Intersecting);
  run([1, 2], [1, 2, 3], Intersecting | Subset);
  run([2, 3], [1, 2, 3], Intersecting | Subset);
  run([3, 4], [1, 2, 3], Intersecting);
  run([4, 5], [1, 2, 3], Disjoint);

  run(['b', 'c'], ['a', 'b', 'c'], Intersecting | Subset);
});
