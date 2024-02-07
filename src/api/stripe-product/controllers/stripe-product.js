'use strict';

/**
 * stripe-product controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::stripe-product.stripe-product');
