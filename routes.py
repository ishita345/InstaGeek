from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
	return render_template('old-profile.html')

@app.route('/dwb')
def dwb():
    return render_template('dwb.html')

@app.route('/dwb-donate')
def dwbDonate():
    return render_template('dwb-donate.html')

@app.route('/updated-profile')
def profileUpdated():
    return render_template('profile-updated.html')

@app.route('/authenticate')
def authenticate():
    return render_template('authenticate.html')

@app.route('/oxfm')
def oxfm():
    return render_template('oxfam.html')

@app.route('/thank-you')
def thankyou():
	return render_template('thank-you.html')

if __name__ == '__main__':
	app.run(debug=True)
