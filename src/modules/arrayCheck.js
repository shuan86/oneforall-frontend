export const checkArrayHasMemberId = (array, memberId) => {
  for (const data of array) {
    if (data.memberId == memberId) {
      return true;
    }
  }
  return false;
};
export const findIndexByMemberId = (array, mId) => {
  let index = -1;
  let count = 0;
  for (const d of array) {
    const { memberId } = d;
    if (mId == memberId) {
      // removeData = d;
      index = count;
    }
    count++;
  }
  return index;
};
