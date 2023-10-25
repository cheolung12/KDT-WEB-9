package java_class;

// 추상 클래스
// 원래는 abstract public~, 지금은 한 파일에 다 작성하려고 접근제어자 생략
abstract class Animals{
	//추상 메소드
	abstract public void sound();
	
	//일반 메소드
	public void sleep() {
		System.out.println("zzzzzzz");
	}
}


// 추상 클래스 Animal 을 상속받는 Chicken 클래스
class Chicken extends Animals {
	// 추상클래스를 사용했으면 추상메소드를 꼭 사용해야함 (override)
	@Override
	public void sound() {
		System.out.println("꼬꼬댁");
	}
}

public class Abstract {

	public static void main(String[] args) {
		
		// 추상클래스는 인스턴스화 할 수 없음!
		// Animals animals = new Animals();
		Chicken chicken = new Chicken();
		chicken.sound();
		chicken.sleep();
	}
}
