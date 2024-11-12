"use client"


  // hooks/usePostCanister.ts
  import { useEffect, useState } from 'react';
  import { ActorSubclass } from '@dfinity/agent';
  
  import { idlFactory } from '@/declarations/cannistermethods';
  import { PostService } from '../types/post.types';
import { useIC } from './usedfinit';
  
  export function usePostCanister() {
    const { createActor } = useIC();
    const [canister, setCanister] = useState<ActorSubclass<PostService> | null>(null);
  
    useEffect(() => {
      const CANISTER_ID = process.env.NEXT_PUBLIC_POST_CANISTER_ID;
      if (!CANISTER_ID) {
        console.error('Post canister ID not found in environment variables');
        return;
      }
  
      const actor = createActor<PostService>(CANISTER_ID, idlFactory);
      setCanister(actor);
    }, [createActor]);
  
    return canister;
  }