import type { Schema, Struct } from '@strapi/strapi';

export interface ForOrderProduct extends Struct.ComponentSchema {
  collectionName: 'components_for_order_products';
  info: {
    description: '';
    displayName: 'product';
    icon: 'lock';
  };
  attributes: {
    productId: Schema.Attribute.String & Schema.Attribute.Required;
    productName: Schema.Attribute.Text & Schema.Attribute.Required;
    productPrice: Schema.Attribute.Decimal & Schema.Attribute.Required;
    quantity: Schema.Attribute.Decimal & Schema.Attribute.Required;
  };
}

export interface ForProductsCharacteristic extends Struct.ComponentSchema {
  collectionName: 'components_for_products_characteristics';
  info: {
    description: '';
    displayName: 'Characteristic';
    icon: 'bulletList';
  };
  attributes: {
    name: Schema.Attribute.String & Schema.Attribute.Required;
    value: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'for-order.product': ForOrderProduct;
      'for-products.characteristic': ForProductsCharacteristic;
    }
  }
}
