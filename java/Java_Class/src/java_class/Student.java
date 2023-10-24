package java_class;

public class Student extends Person {
	
	private String major;
	
	public Student(String name, int age, String major) {
		// super(): 하위클래스에서 상위클래스 생성자를 호출하는데 사용
		super(name, age);
		this.major = major;
	}
	
	@Override
	// protected 로 사용
	public String toString() {
		// super.toString으로 가져와도 됨
		return "Student / name: " + name + " age: " + age + " 전공: " + major; 
	}
}
