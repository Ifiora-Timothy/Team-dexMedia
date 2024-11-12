import { Expand, Send, Video } from "lucide-react";
import { useActionState, useEffect, useState } from "react";
import { usePostCanister } from "@/hooks/usePostCannister";
import { Post } from "@/types/post.types";
import React from "react";
import Form from "next/form"

import { toast } from "sonner";
import { validateUserInput } from "@/lib/validate";
import { useIC } from "@/hooks/usedfinit";

const NewsModal = ({
  modalRef,
  closeModalRef,
}: {
  modalRef: React.RefObject<HTMLDialogElement>;
  closeModalRef: React.RefObject<SVGSVGElement>;
}) => {

  const {principal}= useIC()
  const initialState: {
    data: { title: string; content: string; author: string } | null;
    errors: Record<string, string>;
  } = { data: null, errors: {} };

  const [state, formAction, isPending] = useActionState(
    Authenticate,
    initialState
  );

  async function Authenticate(
    prevState: {
      data: { title: string; content: string; author: string } | null;
      errors: Record<string, string>;
    },
    formData: FormData
  ) {

    if(!principal){
      return { data: null, errors:{ user: "Please connect wallet to continue" } };
    }
    const author = principal;
    const content = formData.get("content") as string;
    const title = formData.get("title") as string;

    const errors: Record<string, string> = {};

    if (!author) errors.author = "author is required";
    if (!title) errors.password = "title is required";
    if (!content) errors.password = "content is required";

    if (Object.keys(errors).length > 0) {
      return { data: null, errors };
    }

    const isValid = validateUserInput([title, content]);

    if (!isValid) {
      return { data: null, errors: { form: "Invalid input" } };
    }
    try {
      const newPostId = await handleCreatePost({ title, content, author });
      console.log({ newPostId });

      return { data: null, errors: {} };
    } catch (err: any) {
      errors.random = err.message;
      return { data: null, errors };
    }
  }
  // const [posts, setPosts] = useState<Post[]>([]);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState<string | null>(null);
  const postCanister = usePostCanister();

  useEffect(() => {
    fetchPosts();
  }, [postCanister]);

  const fetchPosts = async () => {
    if (!postCanister) return;

    try {
      // setLoading(true);
      const fetchedPosts = await postCanister.getPosts();
      console.log({ fetchedPosts }, "fetched");
      // setPosts(fetchedPosts);
    } catch (err) {
      // setError("Failed to fetch posts");
      console.error(err);
    } finally {
      // setLoading(false);
    }
  };

  const handleCreatePost = async (data: {
    title: string;
    content: string;
    author: string;
  }) => {
    if (!postCanister) return;

    try {
      const newPostId = await postCanister.createPost(
        data.title,
        data.content,
        data.author
      );
      console.log({ newPostId }, "newpost");
      await fetchPosts(); // Refresh posts after creation
      toast.success("Post created successfully!");
      return newPostId;
    } catch (err) {
      console.error("Failed to create post:", err);
      toast.error("Failed to create post");
      throw err;
    }
  };

  return (
    <dialog
      ref={modalRef}
      className="h-fit rounded-3xl max-w-full w-[740px] overflow-hidden "
      id="newsModal"
    >
      <Form action={formAction}>
        <div className="w-full p-8 bg-white rounded-3xl flex-col justify-start items-start gap-2 inline-flex">
          <div className="w-full flex-col justify-start items-start gap-3 flex">
            <div className="self-stretch justify-start items-center gap-2 inline-flex">
              <div className="grow shrink basis-0 text-black text-2xl font-semibold font-poppins leading-10">
                Submit News
              </div>
              <Expand
                size={20}
                className="text-black cursor-pointer"
                ref={closeModalRef}
              />
            </div>
            <div className="self-stretch flex-col justify-start items-start gap-2 flex">
              <div className="self-stretch flex-col justify-start items-start gap-5 flex">
                <div className="self-stretch flex-col justify-start items-start gap-3 flex">
                  <div className="self-stretch flex-col justify-start items-start gap-1 flex">
                    <div className="self-stretch text-zinc-400 text-base font-medium font-outfit leading-relaxed">
                      Headline
                    </div>
                    <input
                      type="text"
                      name="title"
                      className="h-12 px-5 w-full relative opacity-50 bg-gray-200 rounded-3xl"
                    />
                  </div>
                  <div className="self-stretch flex-col justify-start items-start gap-1 flex">
                    <div className="self-stretch text-zinc-400 text-base font-medium font-outfit leading-relaxed">
                      Category
                    </div>
                    <div
                      style={{
                        scrollbarWidth: "none",
                      }}
                      className="w-full overflow-auto"
                    >
                      <div className="self-stretch w-fit justify-start items-start gap-2 inline-flex">
                        {[
                          "Sports",
                          "Trending",
                          "Kids",
                          "Politics",
                          "Health",
                          "Banking",
                        ].map((item, index) => (
                          <button
                            key={index}
                            className="self-stretch px-8 py-1 opacity-50 bg-gray-200 rounded-3xl justify-center items-center gap-2.5 flex"
                          >
                            <div className="text-black text-base font-semibold font-['Outfit'] leading-loose">
                              {item}
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <textarea
                  placeholder="Type News Detail"
                  name="content"
                  className="resize-none min-h-64 w-full px-7 pt-4 opacity-50 bg-gray-200 rounded-3xl justify-start items-center inline-flex"
                />
              </div>
            </div>
          </div>
          <div className="w-full justify-start items-center gap-5 inline-flex">
            <div className="grow shrink basis-0 h-16 justify-start items-center gap-3 flex">
              <div className="flex-col justify-center items-center gap-1 inline-flex">
                <ImageEye />
              </div>
              <Video className="text-[#7A7A7A]" size={50} strokeWidth={1} />
            </div>
            <button
              type="submit"
              disabled={isPending}
              className="px-7 py-2 bg-indigo-600/50 rounded-3xl justify-start items-center gap-2 flex"
            >
              <Send size={17} className="text-white" />
              <div className="text-white text-sm font-semibold font-outfit leading-loose">
                {isPending ? "Publishing..." : "Publish"}
              </div>
            </button>
          </div>
        </div>
        {
          state?.errors.form && (
            <div className="w-full p-3 bg-red-200 rounded-3xl justify-center items-center gap-1.5 flex">
              <div className="text-red-500 text-sm font-normal font-['Outfit'] leading-3">
                {state.errors.form}
              </div>
            </div>
          )

        }
      </Form>
    </dialog>
  );
};

export default NewsModal;

const ImageEye = () => {
  return (
    <svg
      width="36"
      height="37"
      viewBox="0 0 56 57"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_20_18718)">
        <path
          d="M48.2805 6.59366H7.50436C4.28721 6.59366 1.6792 8.73223 1.6792 11.3703V44.8067C1.6792 47.4447 4.28721 49.5833 7.50436 49.5833H48.2805C51.4976 49.5833 54.1056 47.4447 54.1056 44.8067V11.3703C54.1056 8.73223 51.4976 6.59366 48.2805 6.59366Z"
          stroke="#7A7A7A"
          strokeWidth="2.77"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M17.697 23.3118C20.1099 23.3118 22.0659 21.7079 22.0659 19.7293C22.0659 17.7508 20.1099 16.1469 17.697 16.1469C15.2841 16.1469 13.3281 17.7508 13.3281 19.7293C13.3281 21.7079 15.2841 23.3118 17.697 23.3118Z"
          stroke="#7A7A7A"
          strokeWidth="2.77"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M54.1061 35.2534L39.5432 23.3118L7.50488 49.5833"
          stroke="#7A7A7A"
          strokeWidth="2.77"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M27.9995 35.1964C31.8655 35.1964 34.9995 32.0624 34.9995 28.1964C34.9995 24.3304 31.8655 21.1964 27.9995 21.1964C24.1335 21.1964 20.9995 24.3304 20.9995 28.1964C20.9995 32.0624 24.1335 35.1964 27.9995 35.1964Z"
          stroke="#7A7A7A"
          strokeWidth="1.75905"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_20_18718">
          <rect
            width="56"
            height="56"
            fill="white"
            transform="translate(0 0.196289)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};
