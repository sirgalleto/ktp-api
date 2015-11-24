'use strict';

module.exports = function (app) {

    var note = new app.controllers.Note();

    return [
        {
            method: 'get',
            url: '/notes',
            action: note.list,
            cors: false
        },
        {
            method: 'get',
            url: '/notes/:id',
            action: note.find,
            cors: false
        },
        {
            method: 'post',
            url: '/notes',
            action: note.create,
            cors: false
        },
        {
            method: 'put',
            url: '/notes/:id',
            action: note.update,
            cors: false
        },
        {
            method: 'delete',
            url: '/note/:id',
            action: note.delete,
            cors: true
        }
    ];
};
