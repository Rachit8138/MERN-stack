import java.util.ArrayList;

public class a1 {
    public static void printMax(ArrayList<Integer> list) {
        // int max = 0;    // -ve infinity
        // for(int i=0; i<list.size(); i++) {
            // if(max < list.get(i)) {
            //     max = list.get(i);
            // }
            int a = list.get(0); // Initialize with the first element

            for (int i = 0; i < list.size(); i++) {
                a = Math.max(a, list.get(i)); // Compare and update max
            }
        System.out.println("max = " + a);
    }
    public static void main(String args[]) {
        ArrayList<Integer> list = new ArrayList<>();
        list.add(1);
        list.add(2);
        list.add(3);
        list.add(4);
        list.add(5);
         
        
        printMax(list);
    }
}
