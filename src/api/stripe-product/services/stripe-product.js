'use strict';

/**
 * stripe-product service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::stripe-product.stripe-product');
