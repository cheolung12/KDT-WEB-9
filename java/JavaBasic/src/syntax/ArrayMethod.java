package syntax;

import java.util.Arrays;

public class ArrayMethod {

	public static void main(String[] args) {

		int[] arr = { 1, 2, 3, 4, 5 };

		// copyOf: 특정 길이 만큼 복사한 새 배열을 반환
		int[] newArr = Arrays.copyOf(arr, 4);
		System.out.println(Arrays.toString(newArr)); // [1, 2, 3, 4]

		// copyOfRange (slice)
		int[] newArr2 = Arrays.copyOfRange(arr, 2, 4);
		System.out.println(Arrays.toString(newArr2)); // [3, 4]

		// fill: 배열의 모든 요소를 주어진 값으로 채움
		Arrays.fill(arr, 10);
		System.out.println(Arrays.toString(arr)); // [10, 10, 10, 10, 10]

		// fill(2)
		int[] arr2 = new int[5];
		arr2[0] = 1;
		arr2[1] = 2;
		arr2[2] = 3;
		Arrays.fill(arr2, 3, arr2.length, 100); // 배열, 시작인덱스, 끝인덱스, 넣고 싶은 값
		System.out.println(Arrays.toString(arr2)); // [1, 2, 3, 100, 100]

		// sort: 배열을 오름차순으로 정렬
		int[] arr3 = { 3, 5, 1, 4, 2 };
		Arrays.sort(arr3);
		System.out.println(Arrays.toString(arr3)); // [1, 2, 3, 4, 5]

		// 그럼 내림차순은? 직접 만들어서 써라
		Integer[] arr4 = { 1, 26, 17, 25, 99, 44, 303 };
		// Arrays.sort(arr4, Collections.reverseOrder()); Collections 라이브러리 사용해도
		Arrays.sort(arr4, (i1, i2) -> i2 - i1);
		System.out.println("Sorted arr[] : " + Arrays.toString(arr4));

		// equals: 두 배열이 같은지 여부 확인 (1차원)
		int[] arr5 = { 1, 2, 3, 4, 5 };
		int[] arr6 = { 1, 2, 3, 4, 5 };
		System.out.println(Arrays.equals(arr5, arr6)); // true
		System.out.println(Arrays.equals(arr5, arr)); // false

		// deepEquals: 다차원 배열 비교
		int[][] arrs1 = { { 1, 2 }, { 3, 4 } };
		int[][] arrs2 = { { 1, 2 }, { 3, 4 } };
		System.out.println(Arrays.deepEquals(arrs1, arrs2)); // true
		
		// binarySearch: 특정 요소의 인덱스값 반환
		// 정렬되어있는 상태에서 사용해야 함
		int[] arr7 = { 1, 2, 3, 4, 5 };
		int index = Arrays.binarySearch(arr7, 2);
		System.out.println(index);	// 1
	}

}
