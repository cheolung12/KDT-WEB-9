package java_class;

// 원래 모든 클래스들은 오브젝트를 상속받고 있음
public class Person extends Object {
	protected String name;
	protected int age;
	
	// 생성자
	public Person(String name, int age) {
		this.name = name;
		this.age = age;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public int getAge() {
		return age;
	}

	public void setAge(int age) {
		this.age = age;
	}
	
	@Override
	public String toString() {
		return "Person / name: " + name + " age: " + age; 
	}
	
	// 얘는 오버로딩
	public String toString(String a) {
		return "ddd";
	}
	
	
	
}
