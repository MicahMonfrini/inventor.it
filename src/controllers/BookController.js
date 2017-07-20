import Book from "../models/Book";

const BookController = {
  list: (req, res, next) => {
    Book.find().exec()
      .then(result => {
        res.json(result);
      })
      .catch(err => {
        next(err);
      });
  },
  show: (req, res, next) => {
    Book.findById(req.params.id).exec()
      .then(item => {
        res.json(item);
      })
      .catch(err => {
        next(err);
      });
  },
  create: (req, res, next) => {
    const book = new Book(req.body);

    book.save()
      .then(savedBook => {
        return res.json(savedBook);
      })
      .catch(err => {
        next(err);
      });
  },
  delete: (req, res, next) => {
    Book.findByIdAndRemove(req.params.id).exec()
      .then(item => {
        res.json(item);
      })
      .catch(err => {
        next(err);
      });
  },
  update: (req, res, next) => {
    Book.findById(req.params.id).exec()
      .then(item => {
        item.title = req.body.title || item.title;
        item.author = req.body.author || item.author;
        item.date = req.body.date || item.date;
        item.publisher = req.body.publisher || item.publisher;
        item.category = req.body.category || item.category;

        item.save()
          .then(updatedItem => {
            return res.json(updatedItem);
          })
          .catch(err => {
            next(err);
          });
      })
      .catch(err => {
        next(err);
      });
  }
};

export default BookController;
