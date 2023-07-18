const { gql } = require('apollo-server');

const typeDefs = gql`
    type User {
        id: Int!
        name:String!
        email:String!
        posts: [Post!]!
    }

    type Post {
        id: Int!
        post: String!
        userId: Int!
        user: User!
        comments: [Comment!]!
    }

    type Like{
        id: Int!
        user: User!
        post: Post!
        isLiked:Boolean!
    }

    type likeResponse{
        success: Boolean!
        isLiked: Boolean
        message: String!
    }

    type Comment {
        id: Int!
        comment: String!
        post: Post!
        user: User!
        replies: [Reply!]!
    }

    type Reply{
        id: Int!
        reply: String!
        comment: Comment!
        user: User!
    }

    input addUserInput{
        name:String!
        email:String!
    }

    input addPostInput{
        post: String!
        userId: Int!
    }

    input addCommentInput{
        postId:  Int!
        userId: Int!
        comment: String!
    }

    input addReplyInput{
        reply: String!
        commentId: Int!
        userId: Int!
    }

    input updateUserInput{
        name:String
        email:String
    }

    input updatePostInput{
        post: String
    }

    input updateCommentInput{
        comment: String!
    }

    input updateReplyInput{
        reply: String!
    }

    type Query{
        users: [User!]!
        user(id:Int!): User!

        posts: [Post!]!
        post(id:Int!): Post!

        comments: [Comment!]!
        comment(id:Int!):Comment!

        replies:[Reply!]!
        reply(id:Int!):Reply!

        like(postId:Int!): Like!
    }

    type Mutation {
        addUser(input:addUserInput!):User!
        addPost(input:addPostInput!):Post!
        addComment(input:addCommentInput!):Comment!
        addReply(input:addReplyInput!):Reply!

        deleteUser(id:Int!):Boolean!
        deletePost(id:Int!):Boolean!
        deleteComment(id:Int!):Boolean!
        deleteReply(id:Int!):Boolean!

        updateUser(id:Int!,input:updateUserInput!):User!
        updatePost(id:Int!,input:updatePostInput!):Post!
        updateComment(id:Int!,input:updateCommentInput!):Comment!
        updateReply(id:Int!, input:updateReplyInput!):Reply!

        toggleLike(id:Int!): likeResponse!

    }
`

module.exports = {typeDefs}