// tslint:disable no-bitwise interface-name

// A intersection B is empty set
// empty set is disjoint to itself
export const Disjoint = 0; // Intersecting bit is not set

// A intersection B is not empty set
export const Intersecting = 1 << 0;

// A intersection B is A
// empty set is subset of any set including itself
export const Subset = 1 << 1;

// A union B is A
export const Superset = 1 << 2;

// intersecting and subset
export const IntersectingSubset = Intersecting | Subset;

// intersecting and superset
export const IntersectingSuperset = Intersecting | Superset;

// subset and superset
export const Equal = Subset | Superset;

// non empty set is intersecting equal to itself
export const IntersectingEqual = Intersecting | Equal;

// empty set is disjoint equal to itself
export const DisjointEqual = Disjoint | Equal;

export const FiniteToComplement: { [K in number]: number } = {
  [Disjoint]: Intersecting | Subset, // 0: both non-empty and disjoint
  [Intersecting]: Intersecting, // 1: both non-empty, and intersecting
  [Subset]: Subset, // 2: A is empty set, B is not
  [Subset | Intersecting]: Disjoint, // 3: both non-empty
  [Superset]: Intersecting | Subset, // 4: B is empty set, A is not
  [Superset | Intersecting]: Intersecting, // 5: both non-empty
  [Superset | Subset]: Subset, // 6: both empty set
  [Superset | Subset | Intersecting]: Disjoint, // 7: both non-empty equal
};

export const ComplementToFinite: { [K in number]: number } = {
  [Disjoint]: Intersecting | Superset, // 0: both non-empty and disjoint
  [Intersecting]: Intersecting, // 1: both non-empty, and intersecting
  [Subset]: Intersecting | Superset, // 2: A is empty set, B is not
  [Subset | Intersecting]: Intersecting, // 3: both non-empty
  [Superset]: Superset, // 4: B is empty set, A is not
  [Superset | Intersecting]: Disjoint, // 5: both non-empty
  [Superset | Subset]: Superset, // 6: both empty set
  [Superset | Subset | Intersecting]: Disjoint, // 7: both non-empty equal
};

export const ComplementToComplement: { [K in number]: number } = {
  [Disjoint]: Intersecting, // 0: both non-empty and disjoint
  [Intersecting]: Intersecting, // 1: both non-empty, and intersecting
  [Subset]: Intersecting | Superset, // 2: A is empty set, B is not
  [Subset | Intersecting]: Intersecting | Superset, // 3: both non-empty
  [Superset]: Intersecting | Subset, // 4: B is empty set, A is not
  [Superset | Intersecting]: Intersecting | Subset, // 5: both non-empty
  [Superset | Subset]: Intersecting | Subset | Superset, // 6: both empty set
  [Superset | Subset | Intersecting]: Intersecting | Subset | Superset, // 7: both non-empty equal
};

export interface IKeySet {
  [key: string]: 1;
  [key: number]: 1;
}

export type Element = number | string;

export type FiniteSet = number[] | string[];

export interface Complement<T extends FiniteSet> {
  Not: T;
}

export type Set = FiniteSet | Complement<FiniteSet>;
