import type { Schema, Attribute } from '@strapi/strapi';

export interface OpeningHoursRestaurantSchedule extends Schema.Component {
  collectionName: 'components_opening_hours_restaurant_schedules';
  info: {
    displayName: 'Schedule';
    icon: 'clock';
    description: '';
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
    opening_time_morning: Attribute.Time;
    closing_time_morning: Attribute.Time;
    open_or_closed: Attribute.Enumeration<['open', 'closed']> &
      Attribute.DefaultTo<'open'>;
    opening_time_afternoon: Attribute.Time;
    closing_time_afternoon: Attribute.Time;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'opening-hours-restaurant.schedule': OpeningHoursRestaurantSchedule;
    }
  }
}
