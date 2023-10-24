package java_class;

public class Dog extends Animal {

	public Dog(String species, String name, int age) {
		super(species, name, age);
	}
	
	@Override
	public void makeSound() {
		System.out.println("왈왈");
	}
	
}