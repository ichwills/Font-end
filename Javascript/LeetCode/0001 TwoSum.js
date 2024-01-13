//枚举(遍历)然后排序查看哪两个相加等于target

let nums = [2, 7, 11, 15],
   target = 9;
//!object
const twoSum = (nums, target) => {
   const prevNums = {}; // 存储出现过的数字，和对应的索引

   for (let i = 0; i < nums.length; i++) {
      // 遍历元素
      const curNum = nums[i]; // 当前元素
      const targetNum = target - curNum; // 满足要求的目标元素
      const targetNumIndex = prevNums[targetNum]; // 在prevNums中获取目标元素的索引
      if (targetNumIndex !== undefined) {
         // 如果存在，直接返回 [目标元素的索引,当前索引]
         return [targetNumIndex, i];
      } else {
         // 如果不存在，说明之前没出现过目标元素
         prevNums[curNum] = i; // 存入当前的元素和对应的索引
      }
      // console.log(curNum, nums, targetNum, prevNums);
   }
};
//!map
const _twoSum = (nums, target) => {
   //map 对象用于存储遍历的数
   let map = new Map();
   //遍历
   for (let i = 0; i < nums.length; i++) {
      //target - nums[i](遍历到的数)
      let result = target - nums[i];
      //如果map内有这个数
      if (map.has(result)) {
         //返回这个数字和索引
         return [map.get(result), i];
      } else {
         // 不存在就存入对应的索引
         map.set(nums[i], i);
      }
   }
   return `null`;
};
console.log(_twoSum(nums, target));
console.log(twoSum(nums, target));
