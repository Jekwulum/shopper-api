import grpc
from generated.user import auth_pb2, auth_pb2_grpc

channel = grpc.insecure_channel('user_service:50054')
auth_stub = auth_pb2_grpc.AuthServiceStub(channel)

def verify_token(token):
	"""Verify the JWT token with the User service."""
	try:
		request = auth_pb2.VerifyTokenRequest(token=token)
		return auth_stub.VerifyToken(request)
	except grpc.RpcError as e:
		print(f"gRPC error: {e.code()} - {e.details()}")
		return None