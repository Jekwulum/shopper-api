// Original file: proto/product/product.proto


export interface AddProductRequest {
  'name'?: (string);
  'description'?: (string);
  'price'?: (number | string);
  'quantity'?: (number);
}

export interface AddProductRequest__Output {
  'name'?: (string);
  'description'?: (string);
  'price'?: (number);
  'quantity'?: (number);
}
