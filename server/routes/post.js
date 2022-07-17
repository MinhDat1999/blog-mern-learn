const express = require("express");
const router = express.Router();
const argon2 = require("argon2");
const jwt = require("jsonwebtoken");

const Posts = require("../models/posts");
const verifyToken = require("../Middleware/checkauth");
router.get("/", async (req, res) => {
  try {
    // const post1 = new Posts({
    //   title: "test",
    //   content: " Bài post test 1",
    // });

    // post1.save();
    const posts = await Posts.find();
    res.json({ success: true, posts });

    res.status(200).json(posts);
  } catch (error) {
    console.log(error);
  }
});

router.post("/", verifyToken, async (req, res) => {
  const { title, content, attachment, author } = req.body;

  if (!title)
    return res.status(400).json({ success: false, message: "Không có title" });
  try {
    const newPost = new Posts({
      title,
      content,
      attachment,
      author,
      user: req.userId,
    });
    await newPost.save();
    res.json({ success: true, message: "post success", post: newPost });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "post fail",
    });
  }
});

//PUT
router.put("/:id", verifyToken, async (req, res) => {
  const { title, content, attachment } = req.body;

  if (!title)
    return res.status(400).json({ success: false, message: "Không có title" });
  try {
    let updatePost = {
      title,
      content: content || "",
      attachment,
    };
    const PostUpdateCondition = { _id: req.params.id, user: req.userId };
    updatePost = await Posts.findOneAndUpdate(PostUpdateCondition, updatePost, {
      new: true,
    });

    if (!updatePost) {
      return res
        .status(401)
        .json({ success: false, message: "Post not found" });
    }
    res.json({
      success: true,
      message: "Up date Thành công",
      post: updatePost,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "post fail",
    });
  }
});

//DELETE
router.delete("/:id", verifyToken, async (req, res) => {
  try {
    const postDelete = { _id: req.params.id, user: req.userId };
    const deletePost = await Posts.findOneAndDelete(postDelete);
    if (!deletePost) {
      return res.status(401).json({
        success: false,
        message: "Post not found and user not authorised",
      });
    }
    res.json({ success: true, post: deletePost });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "delete fail",
    });
  }
});
module.exports = router;
