import { gql } from "@apollo/client/core";
import { TypeDefs } from "./types";

export const typeDefs: TypeDefs = {
  todos: gql`
    query getTodos {
      todos
    }
  `,
  title: gql`
    query getTitle {
      title
    }
  `,
};
