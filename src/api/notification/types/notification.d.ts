import { Attribute, Common } from '@strapi/strapi';

export interface Notification extends Common.UID {
  title: Attribute.String;
  body: Attribute.String;
  timestamp: Attribute.DateTime;
}