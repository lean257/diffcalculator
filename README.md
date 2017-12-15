### Hi! I'm a calculator built in Django and React

### I calculate the difference between:
### 1.) the sum of the squares of the first n natural numbers and 2.) the square of the sum of the same first n natural numbers, where n is guaranteed to be no greater than 100.

### I need:
1. Node >=6
2. Python3
3. Django 2.0

### I'm currently still in development - check out my ToDo list for future improvements.

### I follow airbnb ESlinter, without any semicolon

### Start me
1. Clone me first!
```
git clone https://github.com/lean257/diffcalculator.git
```
2. Start a postres server (using docker)
```
docker run --name some-postgres -e POSTGRES_PASSWORD=mysecretpassword -p 5432:5432 -d postgres
```
3. Create a database for your django project
```
docker run -it --rm --link some-postgres:postgres postgres psql -h postgres -U postgres -c "CREATE DATABASE django"
```
the password is `mysecretpassword`

### Start my backend
1. Create a virtualenv and activate it
```
virtualenv env && source env/bin/activate
```
2. Install requirements
```
pip install -r requirements.txt
```
3. Run the backend
```
cd backend
python manage.py runserver
```
4. Visit http://127.0.0.1:8000/difference?number=42 to try it out.

### Start my frontend
```
cd frontend
npm install
npm start
```

### Run my tests
1. Backend tests
```
python manage.py test
```
2. Frontend tests
```
npm test
```


### ToDo
1. Create API end point from Postgres
2. Write more unit tests
3. Insert more rows in the table