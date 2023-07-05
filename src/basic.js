// 1. 寻找最大值
export function findMax (arr) {
    return Math.max(...arr)
}

// 2. 给定一个整数数组 nums 和一个目标值 target，在该数组中找出和为目标值的那 两个 整数，如果存在，返回true，否则返回false
export function twoSum (nums, target) {
    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return true
            }
        } 
     }
     return false
 
};
