package syntax;
import java.util.Arrays;
import java.util.Scanner;

public class ArrEx {

	public static void main(String[] args) {
		
		Scanner scan = new Scanner(System.in);
		
		// int 배열의 경우0으로 초기화
		int[] intArray = new int[5];
		
		System.out.println("숫자 5개를 입력");
		
		for(int i=0; i<intArray.length; i++) {
			intArray[i] = scan.nextInt();
		}
		// 주소값 출력됨
		System.out.println(intArray);
		
		// 배열 출력 방법 1 (for)
		for(int i=0; i<intArray.length; i++) {
			System.out.print(intArray[i] + " ");
		}
		System.out.println();
		
		// 배열 출력 방법 2 (Arrays.toString())
		System.out.println(Arrays.toString(intArray));
		
		
		// 배열 출력 방법 3 (forEach)
		for(int el: intArray) {
			System.out.print(el + " ");
		}
		System.out.println();
		
		////////////////////////////////////////
		// 2차원 배열로 4년 평점 구하기
		double[][] score = {{3.5, 3.7}, {4.0, 4.1}, {3.2, 3.0}, {3.8, 3.0}};
		
		double sum = 0;
		
		for(int i=0; i<score.length; i++) {
			for(int j=0; j<score[i].length; j++) {
				sum += score[i][j];
			}
		}
		
		int n = score.length;
		int m = score[0].length;
		// 강제 형 변환 적용
		System.out.println("평균: " + (double)sum/(n*m));
		
		////////////////////////////////////////
		
		
		scan.close();
	}
	
}
