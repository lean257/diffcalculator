def compute_difference(number):

  # We could use a for loop and compute that in a loop
  # but that would be way less efficient
  # This will compute the values in constant time so no need to store 
  # the result in the database
  # See: https://brilliant.org/wiki/sum-of-n-n2-or-n3/
  square_of_the_sum = (number * (number + 1) / 2) ** 2
  sum_of_the_squares =  (number * (number+1) * (2 * number + 1))/6
  value = square_of_the_sum - sum_of_the_squares

  return value