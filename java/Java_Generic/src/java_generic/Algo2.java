package java_generic;
import java.util.Arrays;

class Solution {
	public  int[] findIndices(int[] arr, int target){
		int [] answer = new int[2];
		for(int i=0; i<arr.length; i++) {
			for(int j=i+1; j<arr.length; j++) {
				if(arr[i] + arr[j] == target) {
					answer[0] = i;
					answer[1] = j;
					return answer;
				}
			}
		}
		return answer;
	}
}

public class Algo2 {
	static Solution sol = new Solution();
	public static void main(String[] args) {
		int[] nums2 = {3, 2, 4, 7, 6, 8, 5};
		int target2 = 9;
		int[] result2 = sol.findIndices(nums2, target2);
		System.out.println("[" + result2[0] + ", " + result2[1] + "]");
	}

}
