package java_class;

public class Sub extends Super {
	void paint() {
		super.draw();
	}
	void draw() {
		System.out.println("Sub draw");
	}
}
