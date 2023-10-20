package syntax;

public class Overloading {	
	
	// 메소드 오버로딩
	// 1. 정수 두개를 더하는 메소드
	public int add(int a, int b) {
		return a + b;
	}
	// 2. 실수 두개를 더하는 메소드
	public double add(double a, double b) {
		return a + b;
	}
	// 3. 정수 세개를 더하는 메소드
	public int add(int a, int b, int c) {
		return a + b + c;
	}
	
	public static void main(String[] args) {
		Overloading calc = new Overloading();
		
		System.out.println(calc.add(10, 20));
		System.out.println(calc.add(0.15, 0.3));	// 실수의 경우는 근사치로 접근해서 정확한 결과각 안 나
		System.out.println(calc.add(10, 20, 30));
	}

}
