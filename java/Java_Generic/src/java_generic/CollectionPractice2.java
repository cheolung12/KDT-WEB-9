package java_generic;
import java.util.*;

public class CollectionPractice2 {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		Map<String, Integer> hashMap = new HashMap<>();
		
		while(true) {
			String name = sc.next();
			if(name.equals("종료")) {
				break;
			}
			int age = sc.nextInt();
			
			hashMap.put(name, age);
		}
		for (Map.Entry<String, Integer> entrySet : hashMap.entrySet()) {
            System.out.println(entrySet.getKey() + " : " + entrySet.getValue());
        }
	}

}
