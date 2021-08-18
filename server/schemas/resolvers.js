const { AuthenticationError } = require("apollo-server-express");
const { Profile, Product, Cart } = require("../models");
const { signToken } = require("../utils/auth");
const stripe = require("stripe")("sk_test_4eC39HqLyjWDarjtT1zdp7dc");

const resolvers = {
  Query: {
    products: async (parent, { name }) => {
      const params = {};
      if (name) {
        params.name = {
          $regex: name,
        };
      }
      return await Product.find(params).populate("name");
    },
    product: async (paren, { _id }) => {
      return await Product.findById(_id).populate("name");
    },

    cart: async (parent, { _id }, context) => {
      if (context.profile) {
        const profile = await profile.findById(context.user._id).populate({
          path: "carts.products",
          populate: "name",
        });

        return profile.carts.id(_id);
      }

      throw new AuthenticationError("Not logged in");
    },
  },

  Mutation: {
    // addOrder: async (parent, { products }, context) => {
    //   console.log(context);
    //   if (context.profile) {
    //     const cart = new Cart({ products });
    //     await Profile.findByIdAndUpdate(context.user._id, {
    //       $push: { carts: cart },
    //     });
    //     return order;
    //   }

    //   throw new AuthenticationError("Not logged in");
    // },

    updateProduct: async (parent, { _id, availability }) => {
      // const decrement = Math.abs(quantity) * -1;
      return await Product.findByIdAndUpdate(
        _id,
        { $inc: { availability: FALSE } },
        { new: true }
      );
    },
  },
};

module.exports = resolvers;
