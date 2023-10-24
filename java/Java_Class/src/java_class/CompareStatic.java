package java_class;

//static 없는 경우
class WithoutStatic {
   private int registered = 0;
   private String name;
   
   public WithoutStatic(String name) {
      this.name = name;
      registered++;
   }
   
   public int getRegistered() {
      return registered;
   }
}

// static 있는 경우
class WithStatic {
	   private static int registered = 0;
	   private String name;
	   
	   public WithStatic(String name) {
	      this.name = name;
	      registered++;
	   }
	   
	   public int getRegistered() {
	      return registered;
	   }
	}

// static 메소드
class MathUtil {
	static double PI = 3.14;
	// 메소드
	public static double circle(double radius) {
		return PI * radius * radius;
	}
}


public class CompareStatic {

   public static void main(String[] args) {
    WithoutStatic a = new WithoutStatic("aaa"); // 1
    WithoutStatic b = new WithoutStatic("bbb"); // 1
    System.out.println(a.getRegistered());
    System.out.println(b.getRegistered());
    
    // static 을 사용할 경우 하나의 멤버변수를 공유하게 된다. 
    WithStatic c = new WithStatic("ccc");
    WithStatic d = new WithStatic("ddd");
    System.out.println(c.getRegistered()); // 2
    System.out.println(d.getRegistered()); // 2
    
 
    // static 메소드는 객체를 안 만들고 클래스명.메소드로 접근 가능하다.
    System.out.println(MathUtil.circle(3.3));
    // private 가 아닌 변수도 접근 가능
    System.out.println(MathUtil.PI);
    
    // 보통 유틸성으로 만듦, 교안 참고
    
    
    
   }
}