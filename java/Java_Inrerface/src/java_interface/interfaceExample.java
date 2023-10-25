package java_interface;

interface Controller {
	void powerOn();
	void powerOff();
	 // 추가로 메소드를 정의하고 싶을때 default 메소드 사용
	 public default void display() {
		System. out.println("디스플레이");
	 }
}

class TV implements Controller {

	@Override
	public void powerOn() {
		System.out.println("TV Power ON");	
	}

	@Override
	public void powerOff() {
		System.out.println("TV Power OFF");
	}
}

class Computer implements Controller {
	
	@Override
	public void powerOn() {
		System.out.println("Computer Power ON");	
	}

	@Override
	public void powerOff() {
		System.out.println("Computer Power OFF");
	}
}

public class interfaceExample {

	public static void main(String[] args) {
		TV tv = new TV();
		Computer cp = new Computer();
		
		tv.powerOn();
		tv.powerOff();
		tv.display();
		cp.powerOn();
		cp.powerOff();
	}

}
