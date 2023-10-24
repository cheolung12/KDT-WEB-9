package java_class;

public class Cat extends Animal {

	public Cat(String species, String name, int age) {
		super(species, name, age);
	}
	
	@Override
	public void makeSound() {
		System.out.println("골골");
	}
	
	public void attitude() {
		System.out.println("꾹꾹이");
	}
}

