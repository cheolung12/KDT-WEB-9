package java_generic;
import java.util.ArrayList;

public class GenericExample3 {
	// 와일드카드
	
	// ? extends T (상한)
	public void processList(ArrayList<? extends Number> list) {
		// list.add(1); 불가능 -> 타입을 모르기 때문에
		for(Number num: list) {
			System.out.println(num);
		}
	}
	
	// 타입 파라미터
	public <T extends Number> void addToNumberList(ArrayList<T> list, T item) {
		list.add(item);
	}
	
	// ? super T (하한)
	public void processList2(ArrayList<? super Number> list) {
		list.add(1);
	}
	
	public static void main(String[] args) {
		GenericExample3 example = new GenericExample3();
		ArrayList<Double> doubleList = new ArrayList<>();
		doubleList.add(1.1);
		doubleList.add(2.2);
		doubleList.add(3.3);
		
		// 와일드카드 <? extends T>는 읽기전용을 주로 사용
		example.processList(doubleList);
	}
}
