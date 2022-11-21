# A-Secuirty-Device
Coding Assignment for CS 330

What it does: 
Running the program will generate a random number which includes the student Idea number near the end and a random digit at the end of it.
This last digit could be anything, but if it is the number 1, it will set the device as unlocked, if it is the number 4, it will set the device as locked.

How to build it: 
Html: I basically coded a html website link, so the program can run via browser

Actual Code:
I set the program to have 3 inputs 
 1. random generated number using the "math.random" command 
 2. The school ID (I had it in there because the chance of having the ID pop up in the random generated number is extremely low.)
 3. the random generated Digit at the end after the school ID 

I combined the 3 inputs into one whole number by setting a input string

I then set 4 values
  1. SchoolId = 01137
  2. Unlocked = 1
  3. Locked = 4
  4. Digit = 0 

I added a alert to show the user the whole number.
alert(inputString) 

Now for the main part of the code I used a for loop:

This for loop will go throught digit of the input string and check each digit to see if it matches with the first digit of the ID.
I did this by adding the if statement "if (inputString.charAt(i) == schoolId.charAt(digit))" meaning if the first digit/char (i) == schools first digit/char

If it finds a digit that matches with the first digit of the ID, it will see if the next number matches with the 2nd digit of the ID.
I did this by adding in the same code but added a "+2" meaning inputString.charAt(i+2)

I will continue to do this until it matches with every digit of the ID (in the exact order of course)
ex. "(i+3), (i+4), etc

If it doesn't find a match, it will check the next digit.
Did this by using a else statement

After it finds the school id in the string, it will then check if the last digit is either 1 or 4. 
If 1 comes after the ID number, it will show an alert to the user that the device is unlocked
If 4 comes after, then it will show an alert to the user that the device is locked  



Instructions: 
 1. Download/clone the repository 
 2. Run the HTML file 
 3. This Html can run on any browser
 4. Once the program starts running, it will pop up a random generated number which includes the ID
 5. Press Enter
 6. You will then pop up a window on whether the program foud a match or not
 7. Keep clicking enter until you find your first match.
 8. Once you find a complete match 
 9. Press enter again to see whether there is a 1 or a 4 right after
 10. If it's 1, it will tell you the device is unlocked, if it's 4 then it will tell you it is locked
 11. If it isn't either 1 or 4 then the program will just end.  
 
 Where I tested this code: 
 I used Visual Studio Code and tested this code using my browser's web developer console
 (To access this: click on the 3 horizontal line on firefox and click more tools. Click on Web Developer tools and click on console). 
 
 
 
 
 
 
 
 
 
 
