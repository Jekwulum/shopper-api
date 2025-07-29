// Original file: proto/product/product.proto

import type { Item as _product_Item, Item__Output as _product_Item__Output } from '../product/Item';

export interface UpdateProductsQuantityRequest {
  'items'?: (_product_Item)[];
  'status'?: (string);
}

export interface UpdateProductsQuantityRequest__Output {
  'items'?: (_product_Item__Output)[];
  'status'?: (string);
}
