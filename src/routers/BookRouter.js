import express from "express";
import BookController from "../controllers/BookController";

const router = express.Router();

router.get("/api/books", BookController.list);

router.get("/api/books/:id", BookController.show);

router.post("/api/books", BookController.create);

router.delete("/api/books/:id", BookController.delete);

router.put("/api/books/:id", BookController.update);

export default router;
