/**
 * 1. Two Sum
 * @see https://leetcode.com/problems/two-sum/
 */

export default function twoSum(nums: number[], target: number): number[] {
  const map = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i]!;
    const need = target - num;

    if (map.has(need)) return [map.get(need)!, i];
    map.set(num, i);
  }

  return [];
}
