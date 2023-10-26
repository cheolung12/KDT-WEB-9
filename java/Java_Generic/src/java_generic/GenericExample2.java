package java_generic;


class Box<T extends Number> {
	private T item;
	
	public void setItem (T item) {
		this.item = item;
	}
	public T getItem() {
		return item;
	}
}

////////////////////////////

interface IMove {
	void move();
}

class Car implements IMove {
	@Override
	public void move() {
		System.out.println("자동차 출발");
	}
}

// 제네릭 클래스
// T에는 Car 클래스 밖에 못옴 해당 인터페이스를 구현한 클래스만 올 수 있다.
class Container<T extends IMove> {
	private T implClass;
	
	public Container(T implClass) {
		this.implClass = implClass;
	}
	
	public void makeItMove() {
		implClass.move();
	}
}


///////////////////////////

public class GenericExample2 {
	public static void main (String args []) {
		
		// 우클릭 -> Type Hierarchy 를 통해 부모 자료형 확인 가능
		// 아래 3개는 다 Number 형의 아래 계층
		Box<Integer> intBox = new Box<>();
		Box<Double> doubleBox = new Box<>();
		Box<Short> ShortBox = new Box<>();
		
		
		Container<Car> container = new Container<>(new Car());
		container.makeItMove();
	}
}




