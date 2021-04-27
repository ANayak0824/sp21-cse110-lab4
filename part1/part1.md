part 1a

1. 20

2. 20

3. 20

4. This one returns an error because result is not defined (due to let being a block scope type)

5/6. Neither lines return anything (error because we're attempting to modify a constant variable). 
However, if you commented out line 7, you should get a result of zero.

part 1b

1. It prints out 3 after checking the condition and breaking from the for loop.

2. The last price was 300/2 or 150

3. Since there are no decimals, it does nothing and we get 150.

4. It returns 50, 100, 150 -> returns the array but with all the stuff in it divided by two and rounded.

5. Error because the let type is limited to the scope of the for loop

6. Error because the let type is limited to the scope of the for loop

7. Since the finalPrice is actually within the scope of the entire method, the finalPrice behaves as normal and returns 150

8. Returns the discounted array because the let finalPrice is pushed to the array so the array saves the numbers and thus, the method does its job

9. Error because the let type is limited to the scope of the for loop

10. returns 3 since the constant variable acts as normal and returns the length of the array

11. the const keyword actually allows for changes to properties, so the array having values pushed to it is fine as long as it doesn't set it something else entirely. Thus, the array behaves as normal and returns the normal discounted prices.

12A. student.name

12B. student["Grad Year"]

12C. student.greeting()

12D. student['Favorite Teacher'].name

12E. student.courseLoad[0]

