const mongoose = require('mongoose');
const blogModel = require('../models/Blog');
const userModel = require('../models/User');

exports.getAllBlogs = async (req, res, next) => {
  try {
    let blogs = await blogModel.find().populate("user");

    if (blogs) res.status(200).json({
      success: true,
      msg: 'blogs retrieved successfully',
      blogs: blogs
    }); else return res.status(404).json({
      success: false,
      msg: 'Could not find any blog',
    });
  } catch (error) {
    console.error(error.name + ': ' + error.message);
    res.status(501).json({
      success: false,
      error: error.message
    })
  }
}

exports.getBlogById = async (req, res, next) => {
  const id = req.params.id;

  try {
    let blog = await blogModel.findById(id);
    if (blog) {
      return res.status(200).json({ blog });
    } else {
      return res.status(404).json({
        success: false,
        message: "No Blog Found"
      });
    }
  } catch (err) {
    return console.log(err);
  }

};

exports.addBlog = async (req, res, next) => {
  const { title, description } = req.body;
  let imageURL = `${req.protocol}://${req.hostname}:5000/${req.file.filename}`

  try {

    const blog = new blogModel({
      title: title,
      description: description,
      image: imageURL,
      user: res.locals.id,
    })

    const session = await mongoose.startSession();
    session.startTransaction();
    const user = await userModel.findById(res.locals.id)
    console.log(user);
    if (user) {
      user.blogs.push(blog._id)
    }

    if (await blog.save()) await user.save({ session });
    await session.commitTransaction();

    res.status(200).json({
      success: true,
      msg: 'Blog post added successfully',
      data: user
    })

  } catch (error) {
    console.log(error.name + ': ' + error.message);
    return res.status(500).json({
      success: false,
      msg: 'Something went wrong',
      error: error
    });
  }


}

exports.updateBlog = async (req, res, next) => {
  const { title, description } = req.body;
  const blogId = req.params.id;

  if (req.file) {
    let imageURL = `${req.protocol}://${req.hostname}:5000/${req.file.filename}`
    req.body.image = imageURL;
  }

  let blog;
  try {
    blog = await blogModel.findByIdAndUpdate(blogId, {
      title,
      description,
      image: req.body.image
    }, { new: true });


    if (blog) {
      return res.status(200).json({
        success: true,
        msg: 'blog updated successfully!',
        blog: blog
      });
    } else return res.status(500).json({
      success: false,
      msg: "unable To update The blog",
      error: error
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      msg: 'Something went wrong',
      error: err
    });
  }

};

exports.deleteBlog = async (req, res, next) => {
  const id = req.params.id;

  try {
    let blog = await blogModel.findByIdAndDelete(id)

    res.locals.user.blogs.pull(id)

    await res.locals.user.save()

    if (blog) {
      return res.status(200).json({
        success: true,
        message: "Successfully deleted"
      });
    } else {
      return res.status(500).json({
        success: false,
        message: "unable To delete"
      });
    }
  } catch (err) {
    return res.status(500).json({
      success: false,
      msg: 'Something went wrong',
      error: err
    });
  }
};

exports.getByUserId = async (req, res, next) => {
  const userId = req.params.id;

  try {
    let userBlogs = await userModel.findById(userId).populate("blogs");

    if (userBlogs) {
      return res.status(200).json({ success: true, data: userBlogs });
    } else {
      return res.status(404).json({
        success: false,
        message: "No Blog Found"
      });
    }

  } catch (err) {
    return res.status(500).json({
      success: false,
      msg: 'Something went wrong',
      error: err
    });
  }
};