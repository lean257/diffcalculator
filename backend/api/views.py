# stdlib
from datetime import datetime

# 3rd party
from django.http import HttpResponse, HttpResponseBadRequest
import simplejson as json

# project
from api.models import Difference
from api.difference import compute_difference

def index(request):

  number = request.GET.get('number')
  try:
    number = int(request.GET.get('number'))
    assert 0 < number <= 100
  except ValueError:
    return HttpResponseBadRequest("Please enter a valid number")
  except AssertionError:
    return HttpResponseBadRequest("Number should be > 0 and <= 100")

  value = compute_difference(number)
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