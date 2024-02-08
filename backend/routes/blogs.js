var express = require('express');
var router = express.Router();
const Blog = require('../models/blogModel');
const Comment = require('../models/commentModel');
const asyncHandler = require('express-async-handler');

router.get('/', asyncHandler( async(req, res, next) => {
    const blogs = await Blog.find();
    return res.json({blogs});
    // res.render('blogs', { blogs: blogs, user: req.user });
}))

router.get('/create', (req, res, next) => {
    res.render('create_blog', { user: req.user });
})


router.post('/create', asyncHandler( async(req, res, next) => {
    const blog = new Blog({
        title: req.body.title,
        content: req.body.content,
        author: req.body.loggUser,
        timestamp: new Date(),
        genre: req.body.genre || "General",
        comments: [],
    })
    console.log( "NEW BLOG CREATED: ",blog);
    await blog.save();
    return res.json({message: "Blog created successfully!"});
}))



router.get('/:id/edit', asyncHandler( async(req, res, next) => {
    const blog = await Blog.findById(req.params.id);
    res.render('edit_blog', { blog: blog, user: req.user });
}))

router.post('/:id/edit', asyncHandler( async(req, res, next) => {
    const blog = await Blog.findById(req.params.id);
    if(!blog) {
        res.redirect('/blogs');
    }
    console.log(blog);
    blog.title = req.body.title || blog.title;
    blog.content = req.body.content || blog.content;
    await blog.save();
    res.redirect('/blogs');
}))

router.get('/:id', asyncHandler( async(req, res, next) => {
    const blog = await Blog.findById(req.params.id).populate('author');
    const comments = await Comment.find({ _id: { $in: blog.comments } }).populate('comment_author');
    return res.json({blog, comments});
    res.render('blog', { blog: blog, user: req.user, comments: comments});
}))

// 
router.post('/:id/delete', asyncHandler( async(req, res, next) => {
    await Blog.deleteOne({ _id: req.params.id });
    return res.json({message: "Blog deleted successfully!"});
}))


// done 
router.post('/:id/comments', asyncHandler( async(req, res, next)=> {
    const blog = await Blog.findById(req.params.id);
    const comment = new Comment({
        comment_title: req.body.comment_title,
        comment_body: req.body.comment_body,
        comment_author: req.body.loggedUser || req.user,
        comment_time: new Date(),
    })
    console.log("Comment: ", comment);
    await comment.save();
    blog.comments.push(comment);
    await blog.save();
    return res.json({message: "Comment added successfully!"});
    res.redirect(`/blogs/${req.params.id}`);
}))

// done
router.post('/:id/comments/:comment_id/delete', asyncHandler( async(req, res, next) => {
    await Comment.deleteOne({ _id: req.params.comment_id });
    await Blog.findByIdAndUpdate(req.params.id, { $pull: { comments: req.params.comment_id } });
    return res.json({message: "Comment deleted successfully!"});
}))
module.exports = router;