'use strict';

/**
 * data-personal service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::data-personal.data-personal');
