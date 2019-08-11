// tslint:disable no-bitwise
import {
  Complement,
  ComplementToComplement,
  ComplementToFinite,
  FiniteSet,
  FiniteToComplement,
  Set,
} from './const';
import { getRelationOfFiniteSets } from './getRelationOfFiniteSets';

export const getRelationOfSets = (a: Set, b: Set): number => {
  const aNot: FiniteSet | undefined = (a as Complement<FiniteSet>).Not;
  const bNot: FiniteSet | undefined = (b as Complement<FiniteSet>).Not;

  if (aNot === undefined) {
    // a is not complement
    if (bNot === undefined) {
      // b is not complement
      return getRelationOfFiniteSets(a as FiniteSet, b as FiniteSet);
    }

    // b is complement
    // tslint:disable-next-line ter-computed-property-spacing
    return FiniteToComplement[getRelationOfFiniteSets(a as FiniteSet, bNot)];
  }

  // a is complement
  if (bNot === undefined) {
    // b is not complement
    // tslint:disable-next-line ter-computed-property-spacing
    return ComplementToFinite[getRelationOfFiniteSets(aNot, b as FiniteSet)];
  }

  // b is complement
  // tslint:disable-next-line ter-computed-property-spacing
  return ComplementToComplement[getRelationOfFiniteSets(aNot, bNot)];
};
