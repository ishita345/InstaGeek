from flask import Flask, render_template, request, jsonify
from scrape import main

app = Flask(__name__)

@app.route('/')
def home():
	return render_template('index.html')

@app.route('/application')
def application():
    print request
    #companies = request.args.get('companies')
    companies = [
        {
            'company': 'ABC'
        },
        {
            'company': 'XYZ'
        }
    ]
    print companies
    #blogs = main(companies)
    blogs = [
        {
            'title': 'ABC',
            'tags': ['abc','xyz'],
            'date': 'yyymmdd'
        },
        {
            'title': 'ABC',
            'tags': ['abc','xyz'],
            'date': 'yyymmdd'
        }
    ]
    return render_template('application.html', companies=companies, blogs=blogs)

if __name__ == '__main__':
	app.run(debug=True)
