import { FiniteSet, IKeySet } from './const';

export const haveCommonElements = <T extends FiniteSet>(
  a: T,
  b: T
): boolean => {
  const aLen = a.length;
  if (aLen === 0) {
    return false;
  }

  const bLen = b.length;
  if (bLen === 0) {
    return false;
  }

  if (aLen === 1) {
    return b.indexOf(a[0] as any) !== -1;
  }

  if (bLen === 1) {
    return a.indexOf(b[0] as any) !== -1;
  }

  const map: IKeySet = {};
  if (aLen <= bLen) {
    for (let i = 0; i < aLen; i += 1) {
      map[a[i]] = 1;
    }
    for (let i = 0; i < bLen; i += 1) {
      if (map[b[i]] === 1) {
        return true;
      }
    }
  } else {
    for (let i = 0; i < bLen; i += 1) {
      map[b[i]] = 1;
    }
    for (let i = 0; i < aLen; i += 1) {
      if (map[a[i]] === 1) {
        return true;
      }
    }
  }

  return false;
};
