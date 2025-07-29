// Original file: proto/user/auth.proto

import type { Timestamp as _google_protobuf_Timestamp, Timestamp__Output as _google_protobuf_Timestamp__Output } from '../google/protobuf/Timestamp';

export interface VerifyTokenResponse {
  'id'?: (string);
  'name'?: (string);
  'email'?: (string);
  'firstName'?: (string);
  'lastName'?: (string);
  'createdAt'?: (_google_protobuf_Timestamp | null);
  'updatedAt'?: (_google_protobuf_Timestamp | null);
}

export interface VerifyTokenResponse__Output {
  'id'?: (string);
  'name'?: (string);
  'email'?: (string);
  'firstName'?: (string);
  'lastName'?: (string);
  'createdAt'?: (_google_protobuf_Timestamp__Output);
  'updatedAt'?: (_google_protobuf_Timestamp__Output);
}
