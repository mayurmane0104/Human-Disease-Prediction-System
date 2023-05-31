

from flask import Flask, render_template, request, jsonify
import numpy as np
import pandas as pd
import disease_prediction as dp

app = Flask(__name__, template_folder='templates')


@app.route('/predict', methods=['POST'])

def predict():
   data = request.get_json()
   symptoms = data.get('symptoms', [])

   # Convert the symptoms to a Python list
   symptoms_list = list(symptoms)

   # Process the symptoms list as needed
   # ...
   diagnosis_text = dp.get_diagnosis(symptoms_list)

   # Return a response
   response_data = {
      # 'message': 'Received symptoms',
      # 'symptoms': symptoms_list
      'message': diagnosis_text
   }

   return jsonify(response_data)




@app.route('/')
def home():
   diagnosis_text = 'No diagnosis yet'
   return render_template("index.html", options=dp.l1)

if __name__ == '__main__':
   app.run('0.0.0.0', port=5017)
   # app.run(debug=True)