package syntax;
import java.util.Scanner;

public class Practice {
	
	public double add (int a, int b) {
		return a + b;
	}
	public double sub (int a, int b) {
		return a - b;
	}
	public double div (double a, double b) {
		return a / b;
	}
	public double mul (int a, int b) {
		return a * b;
	}
	
	public double calculate(int a) {
		return a * a * Math.PI;
	}
	
	public double calculate(int a, int b) {
		return a * b;
	}
	
	public double calculate(int a, int b, boolean isTriangle) {
		return a * b * 1/2;
	}

	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		System.out.println("나이를 입력하세요.");
		int age = scanner.nextInt();
		
		if(1 <= age && age <= 7) {
			System.out.println("유아");
		} else if(age <= 13){
			System.out.println("초등학생");
		} else if(age <= 16) {
			System.out.println("중학생");
		} else if(age <= 19) {
			System.out.println("고등학생");
		} else if(age >= 20){
			System.out.println("성인");
		}
		
		System.out.println("이름을 입력하세요.");
		String name = scanner.next();
		if(name.equals("홍길동")) {
			System.out.println("남자");
		} else if(name.equals("성춘향")) {
			System.out.println("여자");
		} else {
			System.out.println("모르겠어요");
		}
		
		System.out.println("숫자를 입력하세요.");
		int loop = scanner.nextInt();
		for(int i=1; i<=loop; i++) {
			System.out.print(i + " ");
		}
		
		System.out.println();
		
		Practice prac = new Practice();
		System.out.println("숫자 두 개를 입력하세요.");
		int num1 = scanner.nextInt();
		int num2 = scanner.nextInt();
		System.out.println(prac.add(num1, num2));
		System.out.println(prac.sub(num1, num2));
		System.out.println(prac.div(num1, num2));
		System.out.println(prac.mul(num1, num2));
		
		System.out.println("숫자 두 개를 입력하세요.");

		System.out.println("반지름이 5인 원의 넓이: " + prac.calculate(5));
		System.out.println("가로 4, 세로 7인 직사각형의 넓이: " + prac.calculate(4, 7));
		System.out.println("밑변 6, 높이 3인 삼각형의 넓이: " + prac.calculate(6, 3, true));
		
		scanner.close();
	}
	
	
	
	

}
