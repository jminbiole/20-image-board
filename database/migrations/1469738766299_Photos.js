'use strict';

const Schema = use('Schema');

class PhotosSchema extends Schema {

  up() {
    this.create('photos', (table) => {
      table.increments();
      table.string('url');
      table.text('caption');
      table.timestamps();
    });
  }

  down() {
    this.drop('photos');
  }

}

module.exports = PhotosSchema;
