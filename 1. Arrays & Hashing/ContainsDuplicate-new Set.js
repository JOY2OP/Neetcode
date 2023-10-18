/*Given an integer array nums, return true if any value appears at least 
twice in the array, and return false if 
every element is distinct. */

function containsDuplicate(nums) {
 return new Set(nums).size !== nums.length;  //set gives unique value- size is used only on set
}

console.log(containsDuplicate([1,"abc","abc",2,3,4,5]))
//true
