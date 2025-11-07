'use strict';

/**
 * po-head service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::po-head.po-head');
