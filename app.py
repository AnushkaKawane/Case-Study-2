from flask import Flask, render_template, request, jsonify
from model import recommender


app = Flask(__name__)


@app.route("/")
def home():

    perfumes = recommender.get_all_perfumes()

    return render_template(
        "index.html",
        perfumes=perfumes
    )


@app.route("/recommend", methods=["POST"])
def recommend():

    data = request.get_json()

    if not data:

        return jsonify({
            "success": False,
            "message": "No data received."
        }), 400

    perfume_name = data.get("perfume")

    if not perfume_name:

        return jsonify({
            "success": False,
            "message": "Please select a perfume."
        }), 400

    recommendations = recommender.recommend(
        perfume_name,
        number=6
    )

    if not recommendations:

        return jsonify({
            "success": False,
            "message": "Perfume not found."
        }), 404

    return jsonify({
        "success": True,
        "recommendations": recommendations
    })


if __name__ == "__main__":

    print()
    print("=" * 50)
    print("PERFUME RECOMMENDATION SYSTEM")
    print("=" * 50)
    print()
    print("Starting Flask application...")
    print("Open: http://127.0.0.1:5000")
    print()

    app.run()