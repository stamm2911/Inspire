import {gql} from '@apollo/client';

export const ADD_CART = gql`
    mutation addCart($products: [ID]!) {
        addCart(products: products) {
            products {
                _id
                name
                description
                price
                availability
                image
            }
        }
    }
`;
