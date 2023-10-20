package syntax;
import java.math.BigDecimal;

public class BigDecimalClass {

	public static void main(String[] args) {
	  // 정확한 소수점 연산을 위해 사용  
	  // 클래스명을 타입으로 쓴
	  BigDecimal a= new BigDecimal("0.2");
	  BigDecimal b =new BigDecimal("0.1");
	  
	  BigDecimal sum = a.add(b); 
	  BigDecimal diff = a.subtract(b);
	  BigDecimal multi = a.multiply(b);
	  BigDecimal divi = a.divide(b);
	          
	  System.out.println(sum);
	  System.out.println(diff);
	  System.out.println(multi);
	  System.out.println(divi);
	}
}
