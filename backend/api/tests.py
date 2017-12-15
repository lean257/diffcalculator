from django.test import TestCase

from .models import Difference

class DifferenceModelTest(TestCase):

  def test_integer_representation(self):
    entry = Difference(number=1)
    self.assertEqual(1, entry.number)

  def test_number_from_model(self):
    entry = Difference.objects.create(number=3, occurence=1)
    self.assertIsNotNone(entry.number)

class ProjectTest(TestCase):
  def test_route_response(self):
    response = self.client.get('/difference/?number=1')
    self.assertEqual(response.status_code, 200)

  def test_response_json(self):
    response = self.client.get('/difference/?number=3')
    self.assertContains(response, 3)
    self.assertContains(response, 1)
    self.assertContains(response, 22)