// tslint:disable no-bitwise no-console
import {
  Disjoint,
  Equal,
  FiniteSet,
  Intersecting,
  Subset,
  Superset,
} from './const';
import { getRelationOfSets } from './getRelationOfSets';

test('getRelationOfSets: A to B', () => {
  const run = (a: FiniteSet, b: FiniteSet, expected: number): any =>
    expect(getRelationOfSets(a, b)).toBe(expected);

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

test('getRelationOfSets: A to !B', () => {
  const run = (a: FiniteSet, b: FiniteSet, expected: number): any =>
    expect(getRelationOfSets(a, { Not: b })).toBe(expected);

  run([], [], Subset);

  run([1], [], Subset | Intersecting);
  run([], [1], Subset);

  run([1, 2], [0], Subset | Intersecting);
  run([1, 2], [1], Intersecting);
  run([1, 2], [2], Intersecting);
  run([1, 2], [3], Subset | Intersecting);

  run([0], [1, 2], Subset | Intersecting);
  run([1], [1, 2], Disjoint);
  run([2], [1, 2], Disjoint);
  run([3], [1, 2], Subset | Intersecting);

  run([1, 2], [-1, 0], Subset | Intersecting);
  run([1, 2], [0, 1], Intersecting);
  run([1, 2], [1, 2], Disjoint);
  run([1, 2], [2, 3], Intersecting);
  run([1, 2], [3, 4], Subset | Intersecting);

  run([1, 2, 3], [-1, 0], Subset | Intersecting);
  run([1, 2, 3], [0, 1], Intersecting);
  run([1, 2, 3], [1, 2], Intersecting);
  run([1, 2, 3], [2, 3], Intersecting);
  run([1, 2, 3], [3, 4], Intersecting);
  run([1, 2, 3], [4, 5], Subset | Intersecting);

  run([-1, 0], [1, 2, 3], Subset | Intersecting);
  run([0, 1], [1, 2, 3], Intersecting);
  run([1, 2], [1, 2, 3], Disjoint);
  run([2, 3], [1, 2, 3], Disjoint);
  run([3, 4], [1, 2, 3], Intersecting);
  run([4, 5], [1, 2, 3], Subset | Intersecting);

  run(['b', 'c'], ['a', 'b', 'c'], Disjoint);
});

test('getRelationOfSets: !A to B', () => {
  const run = (a: FiniteSet, b: FiniteSet, expected: number): any =>
    expect(getRelationOfSets({ Not: a }, b)).toBe(expected);

  run([], [], Superset);

  run([1], [], Superset);
  run([], [1], Superset | Intersecting);

  run([1, 2], [0], Superset | Intersecting);
  run([1, 2], [1], Disjoint);
  run([1, 2], [2], Disjoint);
  run([1, 2], [3], Superset | Intersecting);

  run([0], [1, 2], Superset | Intersecting);
  run([1], [1, 2], Intersecting);
  run([2], [1, 2], Intersecting);
  run([3], [1, 2], Superset | Intersecting);

  run([1, 2], [-1, 0], Superset | Intersecting);
  run([1, 2], [0, 1], Intersecting);
  run([1, 2], [1, 2], Disjoint);
  run([1, 2], [2, 3], Intersecting);
  run([1, 2], [3, 4], Superset | Intersecting);

  run([1, 2, 3], [-1, 0], Superset | Intersecting);
  run([1, 2, 3], [0, 1], Intersecting);
  run([1, 2, 3], [1, 2], Disjoint);
  run([1, 2, 3], [2, 3], Disjoint);
  run([1, 2, 3], [3, 4], Intersecting);
  run([1, 2, 3], [4, 5], Superset | Intersecting);

  run([-1, 0], [1, 2, 3], Superset | Intersecting);
  run([0, 1], [1, 2, 3], Intersecting);
  run([1, 2], [1, 2, 3], Intersecting);
  run([2, 3], [1, 2, 3], Intersecting);
  run([3, 4], [1, 2, 3], Intersecting);
  run([4, 5], [1, 2, 3], Superset | Intersecting);

  run(['b', 'c'], ['a', 'b', 'c'], Intersecting);
});

test('getRelationOfSets: !A to B', () => {
  const run = (a: FiniteSet, b: FiniteSet, expected: number): any =>
    expect(getRelationOfSets({ Not: a }, { Not: b })).toBe(expected);

  run([], [], Subset | Superset | Intersecting);

  run([1], [], Subset | Intersecting);
  run([], [1], Superset | Intersecting);

  run([1, 2], [0], Intersecting);
  run([1, 2], [1], Subset | Intersecting);
  run([1, 2], [2], Subset | Intersecting);
  run([1, 2], [3], Intersecting);

  run([0], [1, 2], Intersecting);
  run([1], [1, 2], Superset | Intersecting);
  run([2], [1, 2], Superset | Intersecting);
  run([3], [1, 2], Intersecting);

  run([1, 2], [-1, 0], Intersecting);
  run([1, 2], [0, 1], Intersecting);
  run([1, 2], [1, 2], Subset | Superset | Intersecting);
  run([1, 2], [2, 3], Intersecting);
  run([1, 2], [3, 4], Intersecting);

  run([1, 2, 3], [-1, 0], Intersecting);
  run([1, 2, 3], [0, 1], Intersecting);
  run([1, 2, 3], [1, 2], Subset | Intersecting);
  run([1, 2, 3], [2, 3], Subset | Intersecting);
  run([1, 2, 3], [3, 4], Intersecting);
  run([1, 2, 3], [4, 5], Intersecting);

  run([-1, 0], [1, 2, 3], Intersecting);
  run([0, 1], [1, 2, 3], Intersecting);
  run([1, 2], [1, 2, 3], Superset | Intersecting);
  run([2, 3], [1, 2, 3], Superset | Intersecting);
  run([3, 4], [1, 2, 3], Intersecting);
  run([4, 5], [1, 2, 3], Intersecting);

  run(['b', 'c'], ['a', 'b', 'c'], Superset | Intersecting);
});
