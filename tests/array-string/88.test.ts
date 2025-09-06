import { it, expect, describe } from "vitest";

import merge from "../../src/array-string/88";

describe("twoSum", () => {
  it("basic case", () => {
    const nums1 = [1, 2, 3, 0, 0, 0];
    const nums2 = [2, 5, 6];
    merge(nums1, 3, nums2, 3);
    expect(nums1).toEqual([1, 2, 2, 3, 5, 6]);
  });

  it("nums2 empty", () => {
    const nums1 = [1];
    const nums2: number[] = [];
    merge(nums1, 1, nums2, 0);
    expect(nums1).toEqual([1]);
  });

  it("m = 0 (all from nums2)", () => {
    const nums1 = [0];
    const nums2 = [1];
    merge(nums1, 0, nums2, 1);
    expect(nums1).toEqual([1]);
  });

  it("all nums2 smaller than nums1", () => {
    const nums1 = [4, 5, 6, 0, 0, 0];
    const nums2 = [1, 2, 3];
    merge(nums1, 3, nums2, 3);
    expect(nums1).toEqual([1, 2, 3, 4, 5, 6]);
  });

  it("handles negatives & duplicates", () => {
    const nums1 = [-3, -1, 2, 0, 0, 0];
    const nums2 = [-2, -1, 0];
    merge(nums1, 3, nums2, 3);
    expect(nums1).toEqual([-3, -2, -1, -1, 0, 2]);
  });

  // 確認是否就地修改、且回傳值為 void
  it("mutates nums1 in place", () => {
    const nums1 = [1, 2, 7, 0, 0];
    const nums2 = [3, 6];
    const ret = merge(nums1, 3, nums2, 2);
    expect(ret).toBeUndefined();
    expect(nums1).toEqual([1, 2, 3, 6, 7]);
  });
});
