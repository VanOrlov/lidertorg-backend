import type { Schema, Struct } from '@strapi/strapi';

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
      'for-products.characteristic': ForProductsCharacteristic;
    }
  }
}
