package java_generic;
import java.util.Arrays;

public class Algo {

	public int arrSum(int[] nums, int n) {
		int sum = 0;
		for (int i = 0; i < nums.length; i++) {
			if (nums[i] < n) {
				sum += nums[i];
			}
		}
		return sum;
	}

	public static void main(String[] args) {
		Algo algo = new Algo();
		
		int[][] inputArr = {
				{2, 5, 8, 3, 7},
				{1, 2, 3, 4, 5},
				{6, 7, 8, 9, 10}
		};
		
		for(int[] arr: inputArr) {
			System.out.println("배열: " + Arrays.toString(arr) + " 결과: " + algo.arrSum(arr, 5));
		}
	
	}
}
