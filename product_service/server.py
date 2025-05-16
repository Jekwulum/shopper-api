from flask import Flask, jsonify

port = 5001
app = Flask(__name__)

@app.route('/health', methods=['GET'])
def health_check():
    return jsonify({"status": "Product service is running ✅"}), 200

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=port)