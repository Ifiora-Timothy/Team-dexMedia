"use client";
import { ImageIcon, MoveDiagonal, Send, Video } from "lucide-react";
import { useEffect, useRef } from "react";
import NewsModal from "./NewsModal";
import { usePostCanister } from "@/hooks/usePostCannister";

export default function CreateNewsCard() {
  const modalRef = useRef<HTMLDialogElement>(null);
  const openModalRef = useRef<SVGSVGElement>(null);
  const closeModalRef = useRef<SVGSVGElement>(null);
  // const [posts, setPosts] = useState<Post[]>([]);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState<string | null>(null);
  const postCanister = usePostCanister();

  useEffect(() => {
  const openCurrModal=  openModalRef.current
  const closeCurrModal=  closeModalRef.current
  const currModal=  modalRef.current
  openCurrModal?.addEventListener("click", () => {
    currModal?.showModal();
    });
    closeCurrModal?.addEventListener("click", () => {
      currModal?.close();
    });

    return () => {
      openCurrModal?.removeEventListener("click", () => {
        currModal?.showModal();
      });
      closeCurrModal?.removeEventListener("click", () => {
        currModal?.close();
      });
    };
  }, []);
      useEffect(() => {
      fetchPosts();
    }, [postCanister]);

  const fetchPosts = async () => {
    if (!postCanister) return;

    try {
      // setLoading(true);
      const fetchedPosts = await postCanister.getPosts();
      console.log({ fetchedPosts },"fetcjed");
      // setPosts(fetchedPosts);
    } catch (err) {
      // setError("Failed to fetch posts");
      console.error(err);
    } finally {
      // setLoading(false);
    }
  };

  // const parentRef=useRef<HTMLDivElement>(null)
  const handleCreatePost = async (
    title: string,
    content: string,
    author: string
  ) => {
    if (!postCanister) return;

    try {
      const newPostId = await postCanister.createPost(title, content, author);
      console.log({ newPostId },"newpost");
      await fetchPosts(); // Refresh posts after creation
      return newPostId;
    } catch (err) {
      console.error("Failed to create post:", err);
      throw err;
    }
  };


  const createPost = async () => {

    const title = "new created title";
    const content = "new created title";
    const author = "new created title";
    try {
      const newPostId = await handleCreatePost(title, content, author);
      console.log({ newPostId });
    } catch (err) {
      console.error("Failed to create post:", err);
    }
  }
  return (
    <>
      <div className="w-full h-80 px-3 py-4 bg-white rounded-2xl flex-col justify-start items-start gap-2 inline-flex">
        <div className="self-stretch h-64 flex-col justify-start items-start gap-1 flex">
          <div className="self-stretch justify-start items-center gap-1 inline-flex">
            <div className="grow shrink basis-0 text-black text-base font-semibold font-['Poppins'] leading-normal">
              Submit News
            </div>
            <MoveDiagonal
              ref={openModalRef}
              size={20}
              className="text-black cursor-pointer"
            />
          </div>
          <div className="h-56 w-full relative bg-[#eaeaea] rounded-xl"></div>
        </div>
        <div className="self-stretch justify-start items-center gap-2.5 inline-flex">
          <div className="grow shrink basis-0 h-3 justify-start items-center gap-1.5 flex">
            <div className="justify-start items-center gap-0.5 flex">
              <ImageIcon size={14} className="text-black" />
              <div className="text-black text-xs font-normal font-['Outfit'] leading-3">
                Image
              </div>
            </div>
            <div className="justify-start items-center gap-0.5 flex">
              <Video size={14} className="text-black" />
              <div className="text-black text-xs font-normal font-['Outfit'] leading-3">
                Video
              </div>
            </div>
          </div>
          <button onClick={createPost} className="px-4 py-1.5 bg-[#473bf0]/50 rounded-3xl justify-start items-center gap-1 flex">
            <Send size={20} className="text-white" />
            <div className="text-white text-xs font-semibold font-['Outfit'] leading-tight">
              Publish
            </div>
          </button>
        </div>
      </div>
      <NewsModal modalRef={modalRef} closeModalRef={closeModalRef} />
    </>
  );
}
