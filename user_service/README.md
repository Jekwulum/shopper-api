### User-service for the Shopper Microservice
This is the user-service for the Shopper microservice architecture. It provides user management functionalities such as registration, login, and profile management.

### Setup

[//]: # (how to generate the protobufs from the .proto files)
```bash
# For gRPC 
npm i @grpc/grpc-js @grpc/proto-loader
npm i -D proto-loader-gen-types
```

To generate the protobuf files, run the following command in the `user_service` directory:
```bash
#!/bin/bash

yarn proto-loader-gen-types --grpcLib=@grpc/grpc-js --outDir=src/generated  $(find proto -name "*.proto")
```

### Features
[//]: # (- User registration)
[//]: # (- User login)
[//]: # (- Profile management)
[//]: # (- Password reset)