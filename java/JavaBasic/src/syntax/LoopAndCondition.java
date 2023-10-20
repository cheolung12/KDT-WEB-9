package syntax;
import java.util.Scanner;

public class LoopAndCondition {
	
	public static void main(String[] args) {
		
		Scanner scan = new Scanner(System.in);
		System.out.print("수를 입력하세요: ");
		int num = scan.nextInt();
		
		// if-else
		if(num % 3 == 0) {
			System.out.println("3의 배수입니다.");
		}else {
			System.out.println("3의 배수가 아닙니다.");
		}
		
		// switch
		switch(num % 3) {
		case 0 :
			System.out.println("3의 배수입니다.");
			break;
		default:
			System.out.println("3의 배수가 아닙니다.");
		}
		
		// 문자열 비교
		// 자바에서 문자열은 String 자료형 (참조형) 변수로 접근할 수 있는 값은 문자열이 저장된 메모리 주소값이다.
		// 따라서 == 연산자로는 비교 불가능
		// 변수.equals("문자열") 형태로 비교해야함
		System.out.print("이름을 입력하세요: ");
		String name = scan.next();
		
		if(name.equals("codingon")) {
			System.out.println("코딩온님 환영합니다!!");
		} else {
			System.out.printf("%s님 환영합니다!!", name).println();
		}
			
		// loop
		for(int i=0; i<10; i++) {
			System.out.print(i + " ");
		}
		System.out.println();
		
		// while
		int loopNum = 0;
		while(loopNum < 10) {
			System.out.print(loopNum + " ");
			loopNum++;
		}
		System.out.println();
		
		scan.close();
	}
}
