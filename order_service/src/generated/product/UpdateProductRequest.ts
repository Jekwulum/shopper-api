// Original file: proto/product/product.proto


export interface UpdateProductRequest {
  'id'?: (string);
  'name'?: (string);
  'description'?: (string);
  'price'?: (number | string);
  'quantity'?: (number);
}

export interface UpdateProductRequest__Output {
  'id'?: (string);
  'name'?: (string);
  'description'?: (string);
  'price'?: (number);
  'quantity'?: (number);
}
