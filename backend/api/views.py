# stdlib
from datetime import datetime

# 3rd party
from django.http import HttpResponse, HttpResponseBadRequest
import simplejson as json

# project
from api.models import Difference

def index(request):

  number = request.GET.get('number')
  try:
    number = int(request.GET.get('number'))
    assert 0 < number <= 100
  except ValueError:
    return HttpResponseBadRequest("number should be a number")
  except AssertionError:
    return HttpResponseBadRequest("number should be > 0 and <= 100")

  # We could use a for loop and compute that in a loop
  # but that would be way less efficient
  # This will compute the values in constant time so no need to store 
  # the result in the database
  # See: https://brilliant.org/wiki/sum-of-n-n2-or-n3/
  square_of_the_sum = (number * (number + 1) / 2) ** 2
  sum_of_the_squares =  (number * (number+1) * (2 * number + 1))/6
  value = square_of_the_sum - sum_of_the_squares
  difference, _ = Difference.objects.get_or_create(number=number)
  difference.occurence += 1
  difference.save()

  resp = {
    "datetime": str(datetime.utcnow()),
    "value": value,
    "number": number,
    "occurrences": difference.occurence
  }

  return HttpResponse(json.dumps(resp, indent=4 * ' '))