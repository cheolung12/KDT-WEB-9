package java_class;

import java.util.Scanner;
import java.util.ArrayList;

public class Practice {

	public static void main(String[] args) {

		ArrayList<Rectangle> rects = new ArrayList<>();
		Scanner scan = new Scanner(System.in);

		while (true) {
			System.out.println("사각형의 가로와 세로 길이를 띄어쓰기 기준으로 입력해주세요");
			int width = scan.nextInt();
			int height = scan.nextInt();

			if (width == 0 && height == 0) {
				break;
			}
			Rectangle rect = new Rectangle(width);
			rect.setHeight(height);
			rects.add(rect);
		}

		for (Rectangle rect : rects) {
			System.out.printf("가로 길이는: %d", rect.getWidth()).println();
			System.out.printf("세로 길이는: %d", rect.getHeight()).println();
			System.out.printf("넓이는: %d", rect.calculate()).println();
			System.out.println("----------------------------");

		}
		System.out.printf("Rectangle 인스턴스의 개수 %d", Rectangle.count);
		
		scan.close();
	}

}