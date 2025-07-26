from flask import request, jsonify, g
from grpc import StatusCode, RpcError
from app.auth_client import verify_token

EXCLUDED_ROUTES = ["/health", "/ext/products"]

def auth_middleware(app):
	"""Middleware to authenticate requests using JWT tokens."""
	@app.before_request
	def authenticate():
		# Skip authentication for excluded routes
		if request.path in EXCLUDED_ROUTES:
			return

		token = request.headers.get('Authorization').split(" ")[-1] if request.headers.get('Authorization') else None
		if not token:
			return jsonify({"status": "FAILED", "message": "Authorization token is missing"}), 401

		try:
			user = verify_token(token)
			if user:
				g.user = {
					"id": user.id,
					"email": user.email,
					"firstName": user.firstName,
					"lastName": user.lastName,
					"created_at": user.createdAt.ToDatetime().isoformat(),
					"updated_at": user.updatedAt.ToDatetime().isoformat()
				}
			else:
				return jsonify({"status": "FAILED", "message": "Invalid token"}), 401
		except RpcError as e:
			if e.code() == StatusCode.UNAUTHENTICATED:
				return jsonify({"status": "FAILED", "message": "Invalid token"}), 401
			return jsonify({"status": "FAILED", "message": f"gRPC error: {e.code()} - {e.details()}"}), 500