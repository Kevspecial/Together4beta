const models = require('../../models');

module.exports = {
    docName: 'newsletters',

    browse: {
        headers: {
            cacheInvalidate: false
        },
        options: [
            'filter',
            'fields',
            'limit',
            'order',
            'page'
        ],
        permissions: true,
        query(frame) {
            return models.Newsletter.findPage(frame.options);
        }
    }
};
