import java.util.Scanner;

public class userinput{
  
   public static void main(String[]args){
   
      Scanner input = new Scanner(System.in);
      
      System.out.println("What's your name?");
      
      String userInput = input.next();
      
      System.out.println("Hello " + userInput);
      
    }

}