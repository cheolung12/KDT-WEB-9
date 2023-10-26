package java_generic;
import java.util.*;

public class CollectionPractice {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		Set<String> hashSet = new HashSet<>();
		
		while(true) {
			int n = sc.nextInt();
			if(n == -1) {
				break;
			}
			hashSet.add(Integer.toString(n));
		}
		
		for(String element: hashSet) {
			System.out.print(element + " ");
		}
		
		sc.close();

	}

}
