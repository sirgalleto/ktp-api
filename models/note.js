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
        return q.nbind(this.findOne, this)({_id: id}).then((data) => {
            if(!data) throw new app.plugins.NoteNotFoundError();
            return data;
        });
    };

    NoteSchema.statics.insert = function(note) {
        return q.nbind(this.create, this)(note);
    };

    NoteSchema.statics.update = function(id, data){
        return q.nbind(this.findOne, this)({_id: id}).then((_data) => {
            if(!_data) throw new app.plugins.NoteNotFoundError();
            injector(_data, data, Object.keys(data));
            return q.nbind(_data.save, _data)();
        }).then(() => {
            return q.nbind(this.findOne, this)({ _id: id });
        });
    };

    NoteSchema.statics.delete = function(id){
        return q.nbind(this.findOneAndRemove, this)({_id:id}).then(() => {
            return false;
        });
    };

    return NoteSchema;
};
