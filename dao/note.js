'use strict';

module.exports = function(app){

    var note = new app.models.Note();

    return {
        list: function(){
            return note.list();
        },
        find: function(id){
            return note.findById(id);
        },
        create: function(data){
            return note.insert(data);
        },
        update: function(id, data){
            return note.update(id, data);
        },
        delete: function(id){
            return note.delete(id);
        }
    };
};
