import sys
import os
sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), 'generated')))

import grpc
from dotenv import load_dotenv
from flask import Flask, jsonify
from concurrent import futures
from app.db import init_db
from app.grpc_server import ProductService
from app.middleware import auth_middleware
from app.routes import routes
from generated.product import product_pb2_grpc

load_dotenv()

port = 5001
app = Flask(__name__)

init_db(app)
auth_middleware(app)
app.register_blueprint(routes)

@app.route('/health', methods=['GET'])
def health_check():
    return jsonify({"status": "Product service is running ✅"}), 200

def start_flask():
    app.run(host='0.0.0.0', port=port)

def start_grpc():
    try:
        server = grpc.server(futures.ThreadPoolExecutor(max_workers=10))
        product_pb2_grpc.add_ProductServiceServicer_to_server(ProductService(app), server)
        server.add_insecure_port('0.0.0.0:50051')
        server.start()
        print("[Product-service]: gRPC server started on port 50051 ✅")
        server.wait_for_termination()
    except Exception as e:
        print(f"[Product-service]: Failed to start gRPC server: {e}")


if __name__ == '__main__':
    from threading import Thread
    Thread(target=start_grpc).start()
    start_flask()