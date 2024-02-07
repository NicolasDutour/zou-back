'use strict';

/**
 * stripe-subscription service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::stripe-subscription.stripe-subscription');
