package 그리디알고리즘;

import java.util.Scanner;

public class 보물 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] a = new int[n];
        int[] b = new int[n];

        for (int i=0; i<n; i++){
            a[i] = sc.nextInt();
        }
        for (int i=0; i<n; i++){
            b[i] = sc.nextInt();
        }
        System.out.println();
    }
}
