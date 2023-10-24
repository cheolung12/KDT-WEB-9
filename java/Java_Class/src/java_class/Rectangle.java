package java_class;

public class Rectangle {
	private int width;
	private int height;
	static int count = 0;
	
	public int getWidth() {
		return width;
	}

	public void setWidth(int width) {
		this.width = width;
	}

	public int getHeight() {
		return height;
	}

	public void setHeight(int height) {
		this.height = height;
	}

	public Rectangle(int width) {
		this.width = width;
		count++;
	}
	
	public int calculate () {
		return width * height;
	}
}
