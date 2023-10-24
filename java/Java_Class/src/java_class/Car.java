package java_class;

public class Car {
	
	// 멤버 변수
	private int speed;
	
	// 생성자
	// 클래스명과 동일해야 
	public Car(int speed) {
		this.speed = speed;
	}
	
	// 우클릭 -> source -> generate getter, setter로 만들기
	// setter
	public void setSpeed (int speed) {
		// 유효성 검사
		if(speed >= 0) {
			this.speed = speed;
		}
	}
	
	// getter
	public int getSpeed() {
		return this.speed;
	}
	
	public void increaseSpeed(int speed) {
		this.speed += speed;
	}

	
	public void start() {
		System.out.println("Car Start");
		System.out.println(speed);
	}
	
	
}
