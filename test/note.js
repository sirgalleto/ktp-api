/* global expect, describe, before, it */
'use strict';

describe('Note', () => {
    var booljs = require('bool.js')
    ,   database, dao;

    before(() => {
        return booljs('co.svzosorio.ktp').run().then((api) => {
            database = new api.app.models.Note();
            dao = new api.app.dao.Note();
        });
    });

    describe('Database', () => {
        var dummy = {
            title: 'Test',
            description: 'Dummy',
            url: 'http://example.com'
        };

        before((done) => { database.collection.remove(done); });

        it('Add a note', () => {
            return database.insert(dummy).then((data) => {
                dummy = data;
            });
        });

        it('List notes', () => {
            return database.list().then((notes) => {
                expect(notes).to.have.length(1);
            });
        });

        it('Find note by id', () => {
            return database.findById(dummy._id).then((data) => {
                expect(data.toJSON()).to.eql(dummy.toJSON());
            });
        });

        it('Edit note', () => {
            dummy.title = 'Another title';
            return database.update(
                dummy._id, _.omit(dummy, [ '_id', '__v'])
            ).then((data) => {
                expect(data.toJSON()).to.eql(dummy.toJSON());
            });
        });

        it('Delete note', () => {
            return database.delete(dummy._id);
        });

        it(`Newly deleted note sholdn't be found`, (done) => {
            database.findById(dummy._id).then(function () {
                done(new Error('A note was found. Weird!'));
            }).catch(() => { done(); });
        });

    });

});
