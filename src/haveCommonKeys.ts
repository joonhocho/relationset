import { Element, IKeySet } from './const';

const { keys } = Object;

export const haveCommonKeys = (
  a: IKeySet,
  b: IKeySet,
  aKeys: Element[] = keys(a),
  bKeys: Element[] = keys(b)
): boolean => {
  const aLen = aKeys.length;
  if (aLen === 0) {
    return false;
  }

  const bLen = bKeys.length;
  if (bLen === 0) {
    return false;
  }

  if (aLen <= bLen) {
    // check shorter keys first
    for (let i = 0; i < aLen; i += 1) {
      if (b[aKeys[i]] === 1) {
        return true;
      }
    }
  } else {
    for (let i = 0; i < bLen; i += 1) {
      if (a[bKeys[i]] === 1) {
        return true;
      }
    }
  }

  return false;
};
