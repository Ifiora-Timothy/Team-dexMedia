// components/ConnectWallet.tsx
"use client";

import { idlFactory } from "@/declarations/cannistermethods";
import { useIC } from "@/hooks/usedfinit";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { toast } from "sonner"; // Optional, for notifications

interface ConnectWalletProps {
  className?: string;
}

const ConnectWallet: React.FC<ConnectWalletProps> = ({ className }) => {
  const router = useRouter();
  const { isConnected, principal, connect, createActor } = useIC();
  const [isLoading, setIsLoading] = useState(false);

  // Check if already connected on mount
  useEffect(() => {
    if (isConnected && principal) {
      router.push("/dashboard");
    }
  }, [isConnected, principal, router]);

  const handleConnect = async () => {
    setIsLoading(true);
    try {
      await connect();
      
      // Initialize canister interaction
      const canisterId = process.env.NEXT_PUBLIC_CANISTER_ID || '7ktmd-aaaaa-aaaal-qr6na-ca';
      const actor = createActor(canisterId, idlFactory);
      
      if (actor) {
        // You can perform any initial canister calls here if needed
        // For example: await actor.getInitialData();
        
        // Redirect to dashboard
        router.push("/dashboard");
      }
    } catch (error) {
      console.error("Connection failed:", error);
      toast.error("Failed to connect wallet. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  // If already connected, don't show the button
  if (isConnected) {
    return null;
  }

  return (
    <button
      onClick={handleConnect}
      disabled={isLoading}
      className={`relative text-white text-sm font-semibold font-outfit leading-tight
        ${isLoading ? 'opacity-70 cursor-not-allowed' : 'hover:opacity-90'}
        ${className || ''}`}
    >
      {isLoading ? (
        <>
          <span className="opacity-0">Connect Wallet</span>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
          </div>
        </>
      ) : (
        "Connect Wallet"
      )}
    </button>
  );
};

export default ConnectWallet;