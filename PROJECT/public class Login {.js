public class Login {
    private Scanner sc;
    private String ur, pass;   // Declare instance variables for username and password

    public Login(Scanner sc) {
        this.sc = sc;  // Initialize the scanner
        insertData();  // Call the method to insert data
    }

}
public void insertData() {
    System.out.println("Enter username: ");
    ur = sc.nextLine();
    System.out.println("Enter password: ");
    pass = sc.nextLine();
    validateData();
}
public void validateData() {
    if (ur.equals("admin") && pass.equals("admin")) {
        System.out.println("Login successful!");
    } else {
        System.out.println("Invalid username or password.");
    }
}{}
 System.out.println("Invalid username or password.Please try again.");

class Login_Test{

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        Login l= new Login(sc);
        sc.close(); // Close the scanner after use
    }
}

