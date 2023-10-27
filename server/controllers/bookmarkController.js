const Bookmark = require("../model/bookmarkModel");
const AppError = require("../utils/AppError");
const catchAsync = require("../utils/catchAsync");
const {
  createOne,
  getAll,

  deleteOne
} = require("./handlerFactory");

exports.addUserMovieId = (req, res, next) => {
  if (!req.body.user) req.body.user = req.user._id;

  if (!req.body.movie) req.body.movie = req.params.movieId;

  next();
};

exports.createBookmarkOnMovie = catchAsync(async (req, res, next) => {
  const bookmark = await Bookmark.create(req.body);

  res.status(201).json({
    status: "success",
    data: {
      bookmark
    }
  });
});

exports.getMyBookmarks = catchAsync(async (req, res, next) => {
  const myBookmarks = await Bookmark.find({ user: req.user._id }).populate(
    "movie"
  );

  res.status(200).json({
    status: "success",
    data: {
      bookmarks: myBookmarks
    }
  });
});

exports.deleteBookmarkByMovie = catchAsync(async (req, res, next) => {
  const { movieId } = req.params;

  if (!movieId)
    return next(new AppError("Please provide the movie id to be deleted", 400));

  const toBeDeletedBookmark = await Bookmark.deleteOne({ movie: movieId });

  if (!toBeDeletedBookmark)
    return next(new AppError("There is no movie with such Id"));

  res.status(204).json({
    status: "success"
  });
});

exports.createBookmark = createOne(Bookmark);

exports.getBookmarks = getAll(Bookmark);

exports.deleteBookmark = deleteOne(Bookmark);
