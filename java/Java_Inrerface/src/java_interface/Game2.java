package java_interface;

public class Game2 implements GameConsole {

	@Override
	public void up() {
		System.out.println("상");
	}

	@Override
	public void down() {
		System.out.println("하");
		
	}

	@Override
	public void right() {
		System.out.println("좌");	
	}

	@Override
	public void left() {
		System.out.println("우");
	}

}
