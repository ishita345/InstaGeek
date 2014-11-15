from flask import Flask, render_template, request
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
    blogs = main(companies)
    return render_template('application.html')

if __name__ == '__main__':
	app.run(debug=True)
