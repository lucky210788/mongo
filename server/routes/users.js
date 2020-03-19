const express = require('express');
const User = require("../models/users");

const router = express.Router();

router.get('/users', async (request, response) => {
  await User.find((err, users) => {
    if (err) {
      response.send(err);
    } else {
      response.send(users);
    }
  });
});

router.get('/user/:id', async (request, response) => {
  await User.findById(request.params.id, (err, user) => {
    if (err) {
      response.send(err);
    } else {
      response.send(user);
    }
  });
});

router.post('/user', async (request, response) => {
  const user = new User({
    firstName: request.body.firstName,
    lastName: request.body.lastName,
    email: request.body.email
  });
  await user.save((err) => {
    if (err) {
      response.send(err);
    } else {
      response.send(user);
    }
  });
});

router.delete('/user/:id', async (request, response) => {
  await User.deleteOne({_id: request.params.id}, (err) => {
    if (err) {
      response.send(err);
    } else {
      response.sendStatus(200);
    }
  });
});

router.put('/user/:id', async (request, response) => {
  const id = request.params.id;
  await User.findByIdAndUpdate(id, request.body,
    (err) => {
      if (err) {
        response.send(err);
      } else {
        response.sendStatus(200);
      }
    }
  );
});

module.exports = router;
