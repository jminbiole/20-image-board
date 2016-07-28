'use strict';

const Photos = use('App/Model/Photo');

class PhotoController {
  * new(request, response) {
    yield response.sendView('photos.index');
    response.redirect('/index');
  }

  * create(request, response) {
    yield response.sendView('photos.new')
    response.redirect('/index');
  }

  * store(request, response) {
    const { url, caption } = request.all();

    yield request.photos()
      .create({ url, caption });

    yield request.with({ success: "New photo listed!"}).flash();

    response.redirect('/index');
}
}

module.exports = PhotoController;
