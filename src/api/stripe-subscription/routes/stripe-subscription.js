'use strict';

/**
 * stripe-subscription router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::stripe-subscription.stripe-subscription');
