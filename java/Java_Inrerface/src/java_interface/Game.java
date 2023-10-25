package java_interface;

public class Game implements GameConsole {
	// 빨간줄에 마우스 갖다대서 interface 한번에 가져오자
	
	@Override
	public void up() {
		System.out.println("위");
	}

	@Override
	public void down() {
		System.out.println("아래");	
	}

	@Override
	public void right() {
		System.out.println("오른쪽");
	}

	@Override
	public void left() {
		System.out.println("왼쪽");
	}
	
	/*
	 * 추상클래스와 인터페이스의 차이점
	 * 
	 * 1.상속 
	 * 추상클래스: 한 클래스는 하나의 추상클래스만 상속
	 * 인터페이스 : 한 클래스는 여러 인터페이스를 구현가능
	 * 
	 * 2.멤버변수
	 * 추상클래스: 멤버변수를 가질 수 있다.
	 * 인터페이스: 상수만 포함가능 (final)
	 * 
	 * 3.구성요소
	 * 추상클래스: 추상메서드, 생성자, 변수, 일반메서드
	 * 인터페이스: 추상메서드, 상속, 디폴트메서드
	 * 
	 * 4. 사용
	 * 추상클래스: 상속관계에서 공통의 기능이나 상태를 유지할 때 사용
	 * 인터페이스: 여러 클래스에서 공통으로 필요한 기능을 정의할 때 사용
	 * 
	 *  5.생성자
	 *  추상클래스: 생성자와 초기화 가능
	 *  인터페이스: 생성자와 초기화 불가능
	 *  
	 *  공통점
	 *  하위 클래스에서 특정한 행동을 강제하기 위해 사용
	 *  
	 *  
	 */
	
}
