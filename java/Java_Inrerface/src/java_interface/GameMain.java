package java_interface;

public class GameMain {

	public static void main(String[] args) {
		Game game = new Game();
		Game2 game2 = new Game2();
		
		game.up();
		game.down();
		game.right();
		game.left();
		
		game2.up();
		game2.down();
		game2.right();
		game2.left();
	}
}
