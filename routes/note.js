'use strict';

module.exports = function (app) {

    var note = new app.controllers.Note();

    return [
        {
            method: 'get',
            url: '/note',
            action: note.list,
            cors: true
        },
        {
            method: 'get',
            url: '/note/:id',
            action: note.find,
            cors: true
        },
        {
            method: 'post',
            url: '/note',
            action: note.create,
            cors: true
        },
        {
            method: 'put',
            url: '/note/:id',
            action: note.update,
            cors: true
        },
        {
            method: 'delete',
            url: '/note/:id',
            action: note.delete,
            cors: true
        }
    ];
};
