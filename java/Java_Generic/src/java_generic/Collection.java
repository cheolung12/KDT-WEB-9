package java_generic;
import java.util.*;

public class Collection {
	
	public static void main(String[] args) {
		
		// ArrayList는 생략
		// Linked List
		List<String> linkedList = new LinkedList<String>();
		linkedList.add("A");
		linkedList.add("B");
		linkedList.add(1, "C");
		System.out.println(linkedList); // [A, C, B]
		
		// HashSet -> 중복 없앨 때 사용
		Set<String> hashSet = new HashSet<>();
		hashSet.add("A");
		hashSet.add("B");
		hashSet.add("A");
		System.out.println(hashSet);  // [A, B]
		
		// LinkedHashSet
		Set<String> linkedHashSet = new LinkedHashSet<>();
		linkedHashSet.add("A");
		linkedHashSet.add("B");
		linkedHashSet.add("C");
		System.out.println(linkedHashSet); // [A, B, C]
		
		// TreeSet -> 자동 정렬
		Set<String> treeSet = new TreeSet<>();
		treeSet.add("B");
		treeSet.add("C");
		treeSet.add("A");
		System.out.println(treeSet);  // [A, B, C]
		
		// HashMap
		 Map<String, Integer> hashMap = new HashMap<>();
		 hashMap.put("one", 1);
		 hashMap.put("two", 2);
		 hashMap.put("three", 3);
		 System.out.println(hashMap);  // {one=1, two=2, three=3}
		 
		 // LinkedHashMap -> 순서대로 정렬됨 근데 맵인데 굳이?
		 Map<String, Integer> link = new LinkedHashMap<>();
		 link.put("two", 2);
		 link.put("three", 3);
		 link.put("one", 1);
		 System.out.println(hashMap); // {one=1, two=2, three=3}
		 
		 // TreeMap
		 Map<String, Integer> treeMap = new TreeMap<>();
		 treeMap.put("C", 3);
		 treeMap.put("A", 1);
		 treeMap.put("B", 2);
		 System.out.println(treeMap);   // {A=1, B=2, C=3}
	}

}