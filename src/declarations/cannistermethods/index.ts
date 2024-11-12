
import { IDL } from '@dfinity/candid';
// declarations/your_canister/index.ts

export const idlFactory:IDL.InterfaceFactory = ({ IDL }) => {
    const Post = IDL.Record({
      'id': IDL.Nat,
      'title': IDL.Text,
      'content': IDL.Text,
      'author': IDL.Text,
      'upvotes': IDL.Nat,
      'downvotes': IDL.Nat,
      'createdAt': IDL.Int,
    });
  
    return IDL.Service({
        'getPosts': IDL.Func([], [IDL.Vec(Post)], []),
        'getPostById': IDL.Func([IDL.Nat], [IDL.Opt(Post)], []),
        'getPostsByAuthor': IDL.Func([IDL.Text], [IDL.Opt(Post)], []),
        'upvotePost': IDL.Func([IDL.Nat], [IDL.Bool], []),
        'downvotePost': IDL.Func([IDL.Nat], [IDL.Bool], []),
        'editPost': IDL.Func([IDL.Nat, IDL.Text, IDL.Text], [IDL.Bool], []),
        'deletePost': IDL.Func([IDL.Nat], [IDL.Bool], []),
        'createPost': IDL.Func([IDL.Text, IDL.Text, IDL.Text], [IDL.Nat], []),
    });
  };


  