from flask import Flask, request, jsonify
import joblib
import numpy as np
import os

app = Flask(__name__)

# --- Load the Random Forest model ---
model_path = os.path.join(os.path.dirname(__file__), "heart_rf_model.pkl")
if not os.path.exists(model_path):
    raise Exception("Model file heart_rf_model.pkl not found!")

model = joblib.load(model_path)
print("✅ Loaded model: heart_rf_model.pkl")

# --- Health check endpoint ---
@app.route("/")
def home():
    return "Heart Disease Prediction API is running 🚀"

# --- Prediction endpoint ---
@app.route("/predict", methods=["POST"])
def predict():
    try:
        body = request.get_json()
        if not body or "features" not in body:
            return jsonify({"error": "Please provide 'features' array"}), 400

        features = body["features"]
        arr = np.array(features).reshape(1, -1)

        pred = model.predict(arr)
        try:
            probabilities = model.predict_proba(arr).tolist()
        except Exception:
            probabilities = None

        return jsonify({
            "prediction": int(pred[0]),
            "probabilities": probabilities
        })

    except Exception as e:
        return jsonify({"error": str(e)}), 500

# --- Run the Flask app ---
if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5001, debug=True)
