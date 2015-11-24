'use strict';

module.exports = function (app, Schema) {

    var NoteSchema = new Schema({
        title: String,
        description: String,
        url: String
    });

    NoteSchema.statics.list = function() {
        return q.nbind(this.find, this)();
    };

    NoteSchema.statics.findById = function(id) {
        return q.nbind(this.findOne, this)({_id: id});
    };

    NoteSchema.statics.insert = function(note) {
        return q.nbind(this.create, this)(note);
    };

    NoteSchema.statics.update = function(id, data){
        return q.nbind(this.findOneAndUpdate, this)({_id: id}, data).then(() => {
            return q.nbind(this.findOne, this)({'_id': id});
        });
    }

    NoteSchema.statics.delete = function(id){
        return q.nbind(this.findOneAndRemove, this)({_id:id}).then(() => {
            return false;
        });
    }

    return NoteSchema;
}
