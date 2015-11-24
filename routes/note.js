'use strict';

module.exports = function (app) {

    var note = new app.controllers.Note();

    return [
        {
            method: 'get',
            url: '/notes',
            action: note.list,
            cors: true
        },
        {
            method: 'get',
            url: '/notes/:id',
            action: note.find,
            cors: true
        },
        {
            method: 'post',
            url: '/notes',
            action: note.create,
            cors: true
        },
        {
            method: 'put',
            url: '/notes/:id',
            action: note.update,
            cors: true
        },
        {
            method: 'delete',
            url: '/notes/:id',
            action: note.delete,
            cors: true
        }
    ];
};
