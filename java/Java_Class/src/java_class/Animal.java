package java_class;

public class Animal {
	protected String species;
	protected String name;
	protected int age;
	
	public Animal(String species, String name, int age) {
		this.species = species;
		this.name = name;
		this.age = age;
	}
	
	public void makeSound() {
		System.out.println("동물은 소리를 낸다.");
	}
	
	
}
