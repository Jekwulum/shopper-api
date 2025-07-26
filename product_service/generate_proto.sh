#!/bin/bash

python -m grpc_tools.protoc \
  -I=proto \
  --python_out=generated \
  --grpc_python_out=generated \
  proto/product/product.proto

python -m grpc_tools.protoc \
  -I=proto \
  --python_out=generated \
  --grpc_python_out=generated \
  proto/user/auth.proto

# Add __init__.py to all generated folders
touch generated/__init__.py
touch generated/product/__init__.py
touch generated/user/__init__.py

