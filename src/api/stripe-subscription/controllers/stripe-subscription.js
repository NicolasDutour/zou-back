'use strict';

/**
 * stripe-subscription controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::stripe-subscription.stripe-subscription');
