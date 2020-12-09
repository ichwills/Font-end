let nums = [1, 8, 6, 2, 5, 4, 8, 3, 7];

let maxArea = (height) => {
   let start = 0,
      end = height.length - 1,
      max = 0;
   while (start < end) {
      max = Math.max(
         max,
         (end - start) * (height[start] > height[end] ? height[end--] : height[start++])
      );
   }
   return max;
};
// function maxArea(container) {
//    let max = 0,
//       start = 0,
//       end = container.length - 1;
//    while (start < end) {
//       width = end - start;
//       height = 0;
//       if (container[start] < container[end]) {
//          height = container[start];
//          start++;
//       } else {
//          height = container[end];
//          end--;
//       }
//       area = width * height;
//       if (area > max) {
//          max = area;
//       }
//    }
//    return max;
// }
console.log(maxArea(nums));
