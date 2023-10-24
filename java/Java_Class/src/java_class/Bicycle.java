package java_class;

public class Bicycle extends Vehicle {
	
	public Bicycle(int maxPerson, boolean isEngine) {
		super(maxPerson, isEngine);
	}
	
	@Override
	public void makeSound() {
		System.out.println("따르릉");
	}
}
