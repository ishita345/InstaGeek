from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
	return render_template('profile.html')

@app.route('/dwb')
def dwb():
    return render_template('dwb.html')

@app.route('/dwb-donate')
def dwbDonate():
    return render_template('dwb-donate.html')


@app.route('/oxfm')
def oxfm():
    return render_template('oxfam.html')

if __name__ == '__main__':
	app.run(debug=True)
