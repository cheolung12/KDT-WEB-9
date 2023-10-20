package syntax;
import java.util.Scanner;

public class ScannerClass {

	public static void main(String[] args) {
		
		System.out.println("이름, 나이, 키, 결혼 여부를 빈칸으로 입력하세요.");
		
		// System.in: 표준 입력 스트림, 주로 키보드 입력을 위해 사용 
		Scanner scanner = new Scanner(System.in);
		
		String name = scanner.next();  // 문자열 읽기 
		int age = scanner.nextInt();   // 정수 읽기 
		double height = scanner.nextDouble(); // 실수 읽기 
		boolean single = scanner.nextBoolean(); // 논리값 읽기
		
		System.out.print("이름은 " + name + ", ");
		System.out.print("나이는 " + age + "살, ");
		System.out.print("키는 " + height + "cm, ");
		System.out.println("결혼 여부는 " + single +  "입니다.");
		
		scanner.close();
		
//		System.out.println("이름을 입력하세요");
//		String name = scanner.nextLine();
//		System.out.println("나이를 입력하세요");
//		int age = scanner.nextInt();
//		System.out.printf("안녕하세요 %s님 (%d)세", name, age);
	}

}
