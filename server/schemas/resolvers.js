const { AuthenticationError } = require('apollo-server-express');
const { Profile } = require('../models');
const { Post } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    profiles: async () => {
      return await Profile.find();
    },

    profile: async (parent, { profileId }) => {
      return await Profile.findOne({ _id: profileId });
    },

    posts: async () => {
      return await Post.find();
    },

    post: async (parent, { _id }) => {
      return await Post.findById(_id);
    }
  },

  Mutation: {
    addProfile: async (parent, args) => {
      const user = await Profile.create(args);
      const token = signToken(user);

      return { token, user };
    },

    login: async (parent, { email, password }) => {
      const user = await Profile.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },

    addPost: async(parent, args) => {
      const post = await Post.create(args);
      return { post }
    },

    addComment: async(parent, args) => {
      const post = await Post.findById(args.postId);
      const comment = await Comment.create(args.text);
      const newComment = [...post.comments, comment];
      return await Post.findByIdAndUpdate(args.postId, {
        comments: newComment
      })
    },

    updatePost: async(parent, { _id, picture, description }) => {
      return await Post.findByIdAndUpdate(_id, {
        picture: picture,
        descrption: description
      })
    },

    deletePost: async (parent, { _id }) => {
      return await Post.findOneAndDelete({ _id: _id });
    }
  },
};

module.exports = resolvers;