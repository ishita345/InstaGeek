from flask import Flask, render_template, request, jsonify
from scrape import main

app = Flask(__name__)

@app.route('/')
def home():
	return render_template('index.html')

@app.route('/application')
def application():
    print request
    companies = request.args.get('companies')
    print companies
    companylist = companies.split(',')
    blogs = main(companies)
    return render_template('application.html', companies=companylist, blogs=blogs)

if __name__ == '__main__':
	app.run(debug=True, port=5002)
