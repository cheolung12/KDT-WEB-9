package syntax;

import java.util.InputMismatchException;
import java.util.Scanner;

public class ExceptionHandling {

	public static void main(String[] args) {
		// 0으로 나눌 때
		try {
			// 예외가 발생할 가능성이 있는 실행문
			int num1 = 4;
			int num2 = 0;
			System.out.println(num1 + " / " + num2 + " = " + (num1 / num2));
		} catch (ArithmeticException e) {
			// 예외 처리문
			System.out.println("0으로 나누어 예외 발생");
			System.out.println(e);
		} finally {
			// 예외 발생 여부와 상관없이 무조건 실행되는 문장, 생략가능
			System.out.println("무조건 실행됨");
		}

		// 인덱스 범위를 벗어났을 때
		int[] intArray = { 1, 2, 3, 4 };
		try {
			for (int i = 0; i < 5; i++) {
				System.out.println(intArray[i]);
			}
		} catch (ArrayIndexOutOfBoundsException e) {
			System.out.println("인덱스가 범위를 벗어났습니다.");
		}

		// 입력오류 발생
		Scanner scan = new Scanner(System.in);
		System.out.println("정수를 입력하세요");

		try {
			int num = scan.nextInt();
		} catch (InputMismatchException e) {
			System.out.println("입력오류. 정수를 입력하세요");
			System.out.println(e);
		}

		// 숫자변환오류: NumberFormatException
		// 파일이 존재하지 않을때: FileNotFoundException(컴파일러에 의해 체크됨)
		// 객체참조가 Null인 상태에서 객체의 메서드나 속성에 접근할때
		// NullPointerException
		
		try {
			int n = scan.nextInt();
			int[] arr = new int[n];
			int sum = 0;
			for(int i=0; i<n; i++) {
				arr[i] = scan.nextInt();
				sum += arr[i];
			}
			System.out.println(sum/n); 
		} catch(ArithmeticException e) {
			System.out.println("배열의 크기가 0이라서 평균값을 구할 수 없습니다.");
		} catch(NegativeArraySizeException e) {
			System.out.println("배열의 크기는 음수가 될 수 없습니다. ");
		} catch(InputMismatchException e) {
			System.out.println("입력오류. 양수를 입력하세요");
		}
		
		scan.close();
	}
}
