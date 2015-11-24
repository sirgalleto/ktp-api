'use strict';

module.exports = function(app){

    var Note = app.dao.Note
    ,   json = new app.views.Json();

    return {
        list: function(req, res, next){
            var note = new Note();
            json.promise(note.list(), res, next);
        },
        find: function(req, res, next){
            var note = new Note();
            json.promise(note.find(req.params.id), res, next);
        },
        create: function(req, res, next){
            var note = new Note();
            json.promise(note.create(req.body), res, next);
        },
        update: function(req, res, next){
            var note = new Note();
            json.promise(note.update(req.params.id, req.body), res, next);
        },
        delete: function(req, res, next){
            var note = new Note();
            json.promise(note.delete(req.params.id), res, next);
        }
    };
};
