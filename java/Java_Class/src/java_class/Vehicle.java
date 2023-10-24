package java_class;

public class Vehicle {
	
	protected int maxPerson;
	protected boolean isEngine;
	
	public Vehicle(int maxPerson, boolean isEngine) {
		this.maxPerson = maxPerson;
		this.isEngine = isEngine;
	}
	
	public void makeSound() {
		System.out.println("부릉부릉");
	}
	
}
