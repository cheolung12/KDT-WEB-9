package syntax;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Scanner;

public class ArrayListClass {

	public static void main(String[] args) {

		Scanner scanner = new Scanner(System.in);
		ArrayList<Integer> arrList1 = new ArrayList<>();
		ArrayList<Integer> arrList2 = new ArrayList<>(Arrays.asList(1, 2, 3, 4, 5));

		arrList1.add(1); // [1]
		arrList1.add(2); // [1, 2]
		arrList1.add(1, 100); // [ 1, 100, 2]
		arrList1.remove(2); // [1, 100]
		arrList1.addAll(arrList2); // [1, 100, 1, 2, 3, 4, 5]
		System.out.println(arrList1.size()); // 7
		System.out.println(arrList1.get(3)); // 2
		System.out.println(arrList1.indexOf(1)); // 0
		System.out.println(arrList1.contains(100)); // true
		arrList1.clear();
		
		System.out.println(arrList1); // []

		ArrayList<String> strList = new ArrayList<>();

		while (true) {
			System.out.println("문자를 입력해주세요.");
			String str1 = scanner.nextLine();
			if(str1.equals("exit")) {
				for(int i=0; i<strList.size(); i++) {
					System.out.println(strList.get(i));
				}
				break;
			}
			strList.add(str1);
		}

		scanner.close();
	}
}
