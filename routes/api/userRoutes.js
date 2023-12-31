const router = require('express').Router();
const {
  getSingleUser,
  getUsers,
  createUser,
  putSingleUser,
  deleteSingleUser,
  addFriend,
  deleteFriend,
} = require('../../controllers/userController');

router.route('/').get(getUsers).post(createUser);

router.route('/:userId')
.get(getSingleUser)
.put(putSingleUser)
.delete(deleteSingleUser);

router.route('/:userId/friends/:friendId')
.post(addFriend)
.delete(deleteFriend);

module.exports = router;