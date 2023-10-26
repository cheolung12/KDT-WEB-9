package java_generic;
import java.util.ArrayList;

// 일반 클래스
class StringList {
	
	ArrayList<String> list = new ArrayList<>();
	
	public void addElement(String element) {
		list.add(element);
	}
	public void removeElement(String element) {
		list.remove(element);
	}
}

// 제네릭 클래스
class GenericList <T> {
	ArrayList<T> list = new ArrayList<>();
	
	public void addElement(T element) {
		list.add(element);
	}
	public void removeElement(T element) {
		list.remove(element);
	}
	public T get(int index) {
		return list.get(index);
	}
}

public class GenericExample {

	public static void main(String[] args) {
		StringList list = new StringList();
		list.addElement("element");
		
		// ArrayList가 generic 을 썼던 거였음!
		GenericList<Integer> list2 = new GenericList<>();
		list2.addElement(123);
		list2.addElement(45);
		
		int num = list2.get(1);
		System.out.println(num);  // 45
	}
}
