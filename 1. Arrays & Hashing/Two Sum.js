// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// Example 1:
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1]. 

function zappa(nums,target) {
  const mapObj = new Map();                 //Creates a hashmap, an object with key-pair value
  for (let i = 0; i < nums.length; i++) {
    
    const complement = target - nums[i];    
    
    if(mapObj.has(complement)){            //'.has','.get' should be used with Map()
       return [mapObj.get(complement),i]   // Return array of indexes
       }
     mapObj.set(nums[i], i);
  }
}
console.log(zappa([2, 7, 11, 15],22));
