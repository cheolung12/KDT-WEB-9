package java_class;

public class Practice2 {

	public static void main(String[] args) {
		
//		Cat c = new Cat("고양이", "냥이", 1);
//		Dog d = new Dog("강아지", "풍이", 1);
//		
//		c.makeSound();
//		d.makeSound();
		
		Vehicle v = new Vehicle(100, true);
		Bicycle b = new Bicycle(2, true);
		
		v.makeSound();
		b.makeSound();
	}
	

}
