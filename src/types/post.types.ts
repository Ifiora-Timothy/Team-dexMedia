// types/post.types.ts
export interface Post {
    id: bigint;
    title: string;
    content: string;
    author: string;
    upvotes: bigint;
    downvotes: bigint;
    createdAt: bigint;
  }
  
  export interface PostService {
    createPost: (title: string, content: string, author: string) => Promise<bigint>;
    getPosts: () => Promise<Array<Post>>;
    getPostById: (id: bigint) => Promise<Post | undefined>;
    getPostsByAuthor: (author: string) => Promise<Post | undefined>;
    upvotePost: (id: bigint) => Promise<boolean>;
    downvotePost: (id: bigint) => Promise<boolean>;
    editPost: (id: bigint, title: string, content: string) => Promise<boolean>;
    deletePost: (id: bigint) => Promise<boolean>;
  }
  

  
  
//   // Example usage in a component
//   // components/PostList.tsx
//   import { useEffect, useState } from 'react';
//   import { usePostCanister } from '../hooks/usePostCanister';
//   import { Post } from '../types/post.types';
  
//   export default function PostList() {
//     const postCanister = usePostCanister();
//     const [posts, setPosts] = useState<Post[]>([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState<string | null>(null);
  
//     useEffect(() => {
//       fetchPosts();
//     }, [postCanister]);
  
//     const fetchPosts = async () => {
//       if (!postCanister) return;
  
//       try {
//         setLoading(true);
//         const fetchedPosts = await postCanister.getPosts();
//         setPosts(fetchedPosts);
//       } catch (err) {
//         setError('Failed to fetch posts');
//         console.error(err);
//       } finally {
//         setLoading(false);
//       }
//     };
  
//     const handleUpvote = async (postId: bigint) => {
//       if (!postCanister) return;
  
//       try {
//         const success = await postCanister.upvotePost(postId);
//         if (success) {
//           await fetchPosts(); // Refresh posts after upvote
//         }
//       } catch (err) {
//         console.error('Failed to upvote:', err);
//       }
//     };
  
//     const handleCreatePost = async (title: string, content: string, author: string) => {
//       if (!postCanister) return;
  
//       try {
//         const newPostId = await postCanister.createPost(title, content, author);
//         await fetchPosts(); // Refresh posts after creation
//         return newPostId;
//       } catch (err) {
//         console.error('Failed to create post:', err);
//         throw err;
//       }
//     };
  
//     const handleEditPost = async (postId: bigint, title: string, content: string) => {
//       if (!postCanister) return;
  
//       try {
//         const success = await postCanister.editPost(postId, title, content);
//         if (success) {
//           await fetchPosts(); // Refresh posts after edit
//         }
//         return success;
//       } catch (err) {
//         console.error('Failed to edit post:', err);
//         throw err;
//       }
//     };
  
//     if (loading) return <div>Loading posts...</div>;
//     if (error) return <div>Error: {error}</div>;
  
//     return (
//       <div className="space-y-4">
//         {posts.map((post) => (
//           <div key={post.id.toString()} className="border p-4 rounded-lg">
//             <h2 className="text-xl font-bold">{post.title}</h2>
//             <p className="text-gray-600">{post.content}</p>
//             <div className="flex items-center space-x-4 mt-2">
//               <button
//                 onClick={() => handleUpvote(post.id)}
//                 className="text-blue-500 hover:text-blue-700"
//               >
//                 Upvotes: {post.upvotes.toString()}
//               </button>
//               <span>Downvotes: {post.downvotes.toString()}</span>
//               <span>By: {post.author}</span>
//             </div>
//           </div>
//         ))}
//       </div>
//     );
//   }