// merge the two sorted arrays into a single sorted array

let nums1 = [1, 2, 3, 0, 0, 0];
let nums2 = [2, 5, 6];
 let numscopy = [1, 2, 3];

let n=nums2?.length-1

let m=nums1?.length-1

let p1 = m
let p2 = n
//With copy any array 

for (let i = 0; i < m + n; i++) {
  if (nums1[p1]< nums2[p2]) {
    nums1[m - i] = nums1[p2 - i];
    p1--;
  } else {
    nums1[m - i] = nums2[p2 - i];
    p2--;
  }
}









// this is with copy the array 

for(let i=0;i<m+n;i++){
    if( p2 >= m   || (p1<n && numscopy[p1]< nums2[p2])){
        nums1[i]=numscopy[p1]
        p1++
    }else{
        nums1[i]=nums2[p2]
        p2++
    }
}
 
console.log("🚀 ~ nums1:", nums1)