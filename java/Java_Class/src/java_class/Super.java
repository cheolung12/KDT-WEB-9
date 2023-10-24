package java_class;

public class Super {
	void paint() {
		draw();
	}
	
	void draw() {
		draw();
		System.out.println("Super draw");
	}
}
