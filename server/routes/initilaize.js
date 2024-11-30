const express = require('express');
const router = express.Router();
const { ATM, Post, User, UserPost, Actuality, Webinar, Idea, Contract, TacheUser, TacheCollaborate } = require('../models');

router.get('/populate', async (req, res) => {
  try {
    const post1 = await new Post({
      name: 'Post 1',
      location: 'Location 1'
    }).save();

    const post2 = await new Post({
      name: 'Post 2',
      location: 'Location 2'
    }).save();

    // User mock data
    const user1 = await new User({
      user_name: 'user1',
      email: 'user1@example.com',
      password: 'password123',
      profil_pic: 'https://fakeimg.pl/100x100/',
      badges: 5,
      liked_post: [post1._id],
      saved_post: [post2._id]
    }).save();

    const user2 = await new User({
      user_name: 'user2',
      email: 'user2@example.com',
      password: 'password123',
      profil_pic: 'https://fakeimg.pl/100x100/',
      badges: 3,
      liked_post: [post2._id],
      saved_post: [post1._id]
    }).save();

    // UserPost mock data
    await new UserPost({
      user_id: user1._id,
      post_id: post1._id
    }).save();

    // Actuality mock data
    await new Actuality({
      post_id: post1._id,
      title: 'Actuality 1',
      content: 'Content for Actuality 1'
    }).save();

    // Webinar mock data
    await new Webinar({
      author: 'Author 1',
      time: new Date(),
      date: new Date(),
      content: 'Webinar Content 1',
      link: 'https://example.com/webinar1'
    }).save();

    // Idea mock data
    const idea1 = await new Idea({
      user_id: user1._id,
      type: 'Type 1',
      title: 'Idea 1',
      description: 'Description of Idea 1',
      img: 'https://fakeimg.pl/100x100/',
      link: 'https://example.com/idea1',
      status: 'Active'
    }).save();

    // Contract mock data
    await new Contract({
      user_id: user1._id,
      idea_id: idea1._id,
      status: 'Pending',
      collaboration: 'Collaboration 1'
    }).save();

    // TacheCollaborate mock data
    const tacheCollaborate1 = await new TacheCollaborate({
      title: 'Tache 1',
      description: 'Description of Tache 1'
    }).save();

    // TacheUser mock data
    await new TacheUser({
      user_id: user1._id,
      tache_id: tacheCollaborate1._id,
      link: 'https://example.com/tache1'
    }).save();

    res.status(200).json({
      message: 'Mock data has been populated for all models',
      data: {
        post1,
        post2,
        user1,
        user2,
        idea1,
        tacheCollaborate1,
      },
    });
  } catch (error) {
    res.status(500).json({ error: 'Error populating mock data', details: error.message });
  }
});

module.exports = router;
