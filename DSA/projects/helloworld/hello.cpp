// #include <iostream>
// using namespace std;
// int main()
// {
//    // int age;
//    // cout << "enter your age: " << endl;
//    // cin >> age;
//    // switch (age)
//    // {
//    // case 10:
//    //    cout << "you are " << age << " years old";
//    //    break;
//    // case 15:
//    //    cout << "you are " << age << " years old";
//    //    break;

//    // default:
//    //    cout << "you are neither 10 or 15 years old";
//    //    break;
//    // }
// }

// counting digits
//  int CountDigits(int x) {
//      int res = 0;
//      while (x > 0) {
//          x = x / 10;
//          res++;
//      }
//      cout << res;
//      return res; // Return the result
//  }

// finding palindrome number yes or no
//  bool isPal(int n){
//     int rev = 0;
//     int temp = n;
//     while(temp!=0) {
//        int ld = temp%10;
//        rev = rev*10+ld;
//        temp = temp/10;
//     }
//     if(rev==n)
//        cout<<"YES!! its a palindrome number.";
//     else
//        cout<<"NO!! its not a palindrome number.";

//    return (rev==n);
// }
#include <iostream>
using namespace std;

// itrative function
//  int fact(int n) {
//      int res = 1;
//      for (int i = 2; i <= n; i++) {
//          res = res * i;
//      }
//      return res;
//  }

// recursive function
// int factR(int n)
// {
//     if (n == 0)
//     {
//         return 1;
//     }
//     // cout<<n*factR(n-1);
//     return n * factR(n - 1);
// }

// Trailing zeros in factorial
// Naive method
// int CountZeros(int n)
// {
//     int fact = 1;
//     for (int i = 2; i <= n; i++)
//         fact = fact * i;
//     int res = 0;
//     while (fact % 10 == 0)
//     {
//         res++;
//         fact = fact / 10;
//     }
//     return res;
// }

// Efficient approach
//  int countZeros(int n){
//      int res=0;
//      for(int i=5;i<=n;i=i*5)
//          res = res+n/5;
//      return res;
//  }

// GCD-Greatest commen divisor
// Naive method
//  int gcd(int a, int b){
//      int res = min(a,b);
//      while(res>0){
//          if(a%res==0 && b%res==0){
//              break;
//          }
//          res--;
//      }
//      return res;
//  }

// LCM of two numbers
// int lcm(int a, int b)
// {
//     int res = max(a, b);
//     while (true)
//     {
//         if (res % a == 0 && res % b == 0)
//             return res;
//         res++;
//     }
//     return res;
// }

// effecient solution
int gcd(int a, int b)
{
    if (b == 0)
        return a;
    return gcd(b, a % b);
}
int lcm(int a, int b)
{
    return (a * b) / gcd(a, b);
}
int main()

{
    int a;
    cin >> a;
    int b;
    cin >> b;

    // int result = fact(n);
    // int result = factR(n);
    // int result = CountZeros(n);
    // int result = countZeros(n);
    // int result = gcd(a, b);
    int result = lcm(a, b);
    cout << result; // Display the result
    return 0;
}
