const { AuthenticationError } = require("apollo-server-express");
const { Profile, Product, Cart, Order } = require("../models");
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
      return await Product.find({});
    },
    
    product: async (paren, { _id }) => {
      return await Product.findById(_id).populate("name");
    },

    checkout: async (parent, args, context) => {
      // console.log('context',context)
      console.log('args',args)
      const url = new URL(context.headers.referer).origin;
      console.log('pre product')
      const order = new Order({ products: args.products });
      const line_items = [];
      console.log('order:',order)
      const { products } = await order.populate("products").execPopulate();
      console.log('post product:',products)

      for (let i = 0; i < products.length; i++) {
        const product = await stripe.products.create({
          name: products[i].name,
          description: products[i].description,
          // images: [`${products[i].image}`],
        });

        console.log('product:',product)

        const price = await stripe.prices.create({
          product: product.id,
          unit_amount: products[i].price * 100,
          currency: "usd",
        });

        console.log('price:',price)

        line_items.push({
          price: price.id,
          quantity: 1,
        });
      }

      console.log('line_items:',line_items)

      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items,
        mode: "payment",
        // success_url: `${url}/success?session_id={CHECKOUT_SESSION_ID}`,
        success_url: `${url}/success`,
        cancel_url: `${url}/`,
      });
      console.log('session.id:',session.id)
      return { session:session.id}
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
