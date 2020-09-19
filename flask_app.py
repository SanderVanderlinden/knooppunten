from flask import Flask, request, render_template
from processing import maak_route

app = Flask(__name__)
app.config["DEBUG"] = True

@app.route('/')
def navigation():
    return '''
    <a href="http://sandervanderlinden.pythonanywhere.com/">Home</a>
    <a href="http://sandervanderlinden.pythonanywhere.com/knooppunten">Knooppunten</a>


    <p>
    ideeën: uitleg, link naar mijn git en linkedin + wa nice css (bootstrap?), send via messenger
    </p>
    '''

@app.route('/knooppunten', methods=["GET", "POST"])
def knooppunten():
    if request.method == "POST":
        input_file = request.files["input_file"]

        if input_file.filename == '' or input_file.filename[-4:] != '.gpx':
             return render_template("knooppunten-get.html", error = "Gelieve een .gpx bestand mee te geven!")

        input_data = input_file.stream.read().decode("ISO-8859-1")
        (link_van_naar, link_naar_van, link_van_naar_mijn_locatie, link_naar_van_mijn_locatie) = maak_route(input_data)
        return render_template("knooppunten-post.html",
            link_van_naar = link_van_naar,
            link_naar_van = link_naar_van,
            link_van_naar_mijn_locatie = link_van_naar_mijn_locatie,
            link_naar_van_mijn_locatie = link_naar_van_mijn_locatie,
            filename = input_file.filename
        )

    return render_template("knooppunten-get.html")