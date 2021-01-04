# 003-JS-password-generator

https://rojorevolution.github.io/003-JS-password-generator/

## Project Goal

The goal of this project was to use Javascript to generate a random password using prompts and the following criteria:

 - The length must be between 8-128 charachters long
 - can include lowercase letters
 - can include uppercase letters
 - can include numbers
 - can include specialcharacters

![Screenshot](assets/images/screenshot.png)


 ## Logic

 I worked on individual pieces on their own first, and then combined everything into a single function which triggers when the Generate button is clicked.

 I started by creating 1 variable for the length and 4 different variables each for lowercase, uppercase, numbers and special characters. I also included an empty "requirements" variable where each of the original 4 variables could be combined.

 I then began by working out the logic of randomizing each individual index of a string. Using a for loop, I iterated with Math.floor(Math.random()) over a string, and had the random number pass as the index # of that string. Afterwards pused the index value into a new password, which would continue to add new values to the password string.
 
 Once I figured out how to randomize a new string, I then proceeded to figure out the logic for the password requirements. Using do...while loops and if statements, I was able to validate the prompts to meet the requirements via booleans, and combine the necessary strings to a new variable named requirements. This variable will indicate which options the user has chosen to include in their password.

 I then applied the length and the requirements chosen to the initial for loop I created to randomize a string. Now, however, the user length and the requirements are being determined via the prompts the user chose. The final result was then logged to a variable and returned to the text area on the screen.



