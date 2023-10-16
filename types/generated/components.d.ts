import type { Schema, Attribute } from '@strapi/strapi';

export interface OpeningHoursRestaurantSchedule extends Schema.Component {
  collectionName: 'components_opening_hours_restaurant_schedules';
  info: {
    displayName: 'Schedule';
    icon: 'clock';
  };
  attributes: {
    day: Attribute.Enumeration<
      [
        'monday',
        'tuesday',
        'wednesday',
        'thursday',
        'friday',
        'saturday',
        'sunday'
      ]
    >;
    opening_time: Attribute.Time;
    closing_time: Attribute.Time;
    open_or_closed: Attribute.Enumeration<['open', 'closed']> &
      Attribute.DefaultTo<'open'>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'opening-hours-restaurant.schedule': OpeningHoursRestaurantSchedule;
    }
  }
}
