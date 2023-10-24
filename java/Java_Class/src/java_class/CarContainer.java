package java_class;

public class CarContainer {
	
	public static void main(String[] args) {
		Car bmw = new Car(120);
		Car kia = new Car(60);
		
		// 잘못된 접근 방법 : 외부에 있는 클래스에 직접 접근 하였음
		// bmw.speed = 120;
		// kia.speed = 90;
		
		bmw.start();
		kia.start();
		
		// 잘못된 값에 대한 객체를 보
		// bmw.setSpeed(-120);
		// kia.setSpeed(-90);
		
		bmw.increaseSpeed(100);
		
		System.out.println("bmw: " + bmw.getSpeed());
		System.out.println("kia: " + kia.getSpeed());
		
		
	}
}
