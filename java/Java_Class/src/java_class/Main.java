package java_class;

public class Main {

	public static void main(String[] args) {
		Person person  = new Person("홍길동", 30);
		
		// Object 에게 상속받은 메소드 -> 오버라이딩
		System.out.println(person.toString());
		
		Student student = new Student("ㅇㅇㅇ", 17, "컴퓨터공학");
		System.out.println(student.toString());
		
		// 하위 클래스에서 부모 클래스 메서드 사용 (여기서는 super 안써도됨)
		System.out.println(student.getName());
		System.out.println(student.getAge());
	}

}
