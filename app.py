from flask import Flask, render_template,send_file, request

app = Flask(__name__)

links = {
"Github": "https://github.com/17Melissa",
"Linkedin": "https://www.linkedin.com/in/melissa-meng-a24734204/"
}

@app.route('/', methods=["GET", "POST"])
def index():

	if request.method == "POST": #post request
	#with open("Resume.pdf", "rb") as f:
		return send_file("./cs-resume.pdf", attachment_filename="resume.pdf", as_attachment=True)

	else: #get request
		return render_template("firstweb.html", links=links)

if __name__ == '__main__': 
	app.run(debug=True, host = '0.0.0.0')