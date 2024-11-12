"use client"
import { idlFactory } from '@/declarations/cannistermethods';
import { useIC } from '@/hooks/usedfinit';
import { useEffect, useState } from 'react';
import { ActorSubclass } from '@dfinity/agent';
// Example canister interface
export interface CanisterService {
  getName: () => Promise<string>;
  setName: (name: string) => Promise<void>;
  // Add other methods based on your canister's interface
}

// Constants for your environment
// const DFX_NETWORK = process.env.NEXT_PUBLIC_DFX_NETWORK || "local";
// const CANISTER_ID = process.env.NEXT_PUBLIC_CANISTER_ID || "7ktmd-aaaaa-aaaal-qr6na-ca";

// Example of how to use it in your component
export function useCanister():ActorSubclass<CanisterService> | null {
  const { createActor } = useIC();
  const [canister, setCanister] =  useState<ActorSubclass<CanisterService> | null>(null);


  useEffect(() => {
    const CANISTER_ID = process.env.NEXT_PUBLIC_CANISTER_ID;
    if (!CANISTER_ID) {
      console.error('Canister ID not found in environment variables');
      return;
    }

    const actor = createActor<CanisterService>(CANISTER_ID, idlFactory);
    setCanister(actor);
  }, [createActor]);

  return canister;
}