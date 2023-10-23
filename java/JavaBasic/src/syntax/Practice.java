package syntax;
import java.util.Scanner;

public class Practice {
	
	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		
		int[] arr = new int[5];
		int sum = 0;
		
		for(int i=0; i<arr.length; i++) {
			arr[i] = scan.nextInt();
			sum += arr[i];
		}
		// 강제 형변환
		System.out.println("평균은: " + (double)sum / 5);
		
		
		scan.close();
	}
}
