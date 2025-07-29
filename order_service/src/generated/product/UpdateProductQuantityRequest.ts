// Original file: proto/product/product.proto

import type { Item as _product_Item, Item__Output as _product_Item__Output } from '../product/Item';

export interface UpdateProductQuantityRequest {
  'items'?: (_product_Item)[];
  'status'?: (string);
}

export interface UpdateProductQuantityRequest__Output {
  'items'?: (_product_Item__Output)[];
  'status'?: (string);
}
