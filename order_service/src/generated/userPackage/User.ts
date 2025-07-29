// Original file: proto/user/user.proto

import type { Timestamp as _google_protobuf_Timestamp, Timestamp__Output as _google_protobuf_Timestamp__Output } from '../google/protobuf/Timestamp';

export interface User {
  'id'?: (string);
  'email'?: (string);
  'password'?: (string);
  'firstName'?: (string);
  'lastName'?: (string);
  'createdAt'?: (_google_protobuf_Timestamp | null);
  'updatedAt'?: (_google_protobuf_Timestamp | null);
}

export interface User__Output {
  'id'?: (string);
  'email'?: (string);
  'password'?: (string);
  'firstName'?: (string);
  'lastName'?: (string);
  'createdAt'?: (_google_protobuf_Timestamp__Output);
  'updatedAt'?: (_google_protobuf_Timestamp__Output);
}
