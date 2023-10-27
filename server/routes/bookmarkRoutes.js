const express = require("express");
const {
  getBookmarks,

  createBookmark,

  deleteBookmark,
  addUserMovieId,
  getMyBookmarks,
  deleteBookmarkByMovie
} = require("../controllers/bookmarkController");
const { protect, verifyToken } = require("../controllers/authController");

const router = express.Router({ mergeParams: true });

router.route("/").get(getBookmarks);

router.use(verifyToken, protect);

router.route("/").post(addUserMovieId, createBookmark);

router.route("/my-bookmarks").get(getMyBookmarks);

router.route("/delete-bookmark/:movieId").delete(deleteBookmarkByMovie);

router.route("/:id").delete(deleteBookmark);

module.exports = router;
