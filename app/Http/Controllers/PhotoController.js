'use strict';

const Post = use('App/Model/Post');

class PhotoController {
  * new(req, res) {
    yield res.sendView('register.new');
  }

  * create(req, res) {
    const {url, caption} = req.all();

    const newPost = new Post({ url, caption });
    yield newPost.save();
    res.send(newPost);
  }
}

module.exports = PhotoController;
