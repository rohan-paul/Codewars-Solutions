''' https://www.codewars.com/kata/522551eee9abb932420004a0/train/python

Codewar-Problem Statement - I love Fibonacci numbers in general, but I must admit I love some more than others.

I would like for you to write me a function that when given a number (n) returns the n-th number in the Fibonacci Sequence.

For example:

   nth_fib(4) == 2
Because 2 is the 4th number in the Fibonacci Sequence.

For reference, the first two numbers in the Fibonacci sequence are 0 and 1, and each subsequent number is the sum of the previous two.

---

Notes on Fibonacci Number - https://www.mathsisfun.com/numbers/fibonacci-sequence.html#:~:text=It%20is%20that%20simple!,196418%2C%20317811%2C%20...

The Fibonacci Sequence is the series of numbers:

0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...

The next number is found by adding up the two numbers before it:

the 2 is found by adding the two numbers before it (1+1),
the 3 is found by adding the two numbers before it (1+2),
the 5 is (2+3),
and so on!

Here is a longer list:

0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765, 10946, 17711, 28657, 46368, 75025, 121393, 196418, 317811, ...


'''
#Alternative-1
# def nth_fib(n):

#   temp_fib = [0, 1]

#   if n < 3:
#     return temp_fib[n - 1]

#   for _ in range(n - 2):
#     temp_fib[0], temp_fib[1] = temp_fib[1], sum(temp_fib)

#   return temp_fib[1]

#Alternative-1 - SIMPLEST AND BEST
def nth_fib(n):
  a, b = 0, 1
  for i in range(n-1):
    a, b = b, a+b

  return a


print(nth_fib(4))
