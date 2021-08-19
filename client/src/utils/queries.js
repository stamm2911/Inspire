import {gql} from '@apollo/client';

export const QUERY_PRODUCTS = gql`
    query getProducts($availability: ID) {
        products (availability: $availability) {
            _id
            name
            description
            price
            availability
            image
        } 
    }
`;

export const QUERY_ALL_PRODUCTS = gql`
    {
        products {
            _id
            name
            descriptions
            price
            availability
            image
        }
    }
`;

export const QUERY_CART = gql`
    query getCart($products: [ID]!) {
        cart(products: $products) {
        session
        }
    }
`;

