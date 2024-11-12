"use client"
import { Actor, ActorSubclass, HttpAgent, Identity } from '@dfinity/agent';
import { AuthClient } from '@dfinity/auth-client';
import { createContext, useState, useEffect, PropsWithChildren } from 'react';
import { IDL } from '@dfinity/candid';
// Initialize IC host
const host = "https://ic0.app";

// Create Context
export const ICContext = createContext<{
  isConnected: boolean;
  principal: string | null;
  identity: Identity | null;
  connect: () => Promise<void>;
  disconnect: () => Promise<void>;
  createActor: <T>(canisterId: string, idlFactory: IDL.InterfaceFactory) => ActorSubclass<T> | null;
}>({
  isConnected: false,
  principal: null,
  identity: null,
  connect: async () => {},
  disconnect: async () => {},
  createActor: () => null,
});


// IC Provider Component
export function ICProvider({children}:PropsWithChildren) {
    const [isConnected, setIsConnected] = useState(false);
    const [principal, setPrincipal] = useState<string|null>(null);
    const [authClient, setAuthClient] = useState<AuthClient|null>(null);
    const [identity, setIdentity] = useState<Identity|null>(null);
  
    useEffect(() => {
      initializeAuthClient();
    }, []);
  
    const initializeAuthClient = async () => {
      const client = await AuthClient.create();
      setAuthClient(client);
  
      // Check if user is already authenticated
      const isAuthenticated = await client.isAuthenticated();
      if (isAuthenticated) {
        const identity = client.getIdentity();
        console.log({identity,principal:identity.getPrincipal().toString()})
        setIdentity(identity);
        setPrincipal(identity.getPrincipal().toString());
        setIsConnected(true);
      }
    };
  
    const connect = async () => {
      if (!authClient) return;
  
      try {
        await authClient.login({
          identityProvider: 'https://identity.ic0.app',
          onSuccess: async () => {
            const identity = authClient.getIdentity();
            console.log({identity,principal:identity.getPrincipal().toString()})
            setIdentity(identity);
            setPrincipal(identity.getPrincipal().toString());
            setIsConnected(true);
          },
        });
      } catch (error) {
        console.error('Connection failed:', error);
      }
    };
  
    const disconnect = async () => {
      if (!authClient) return;
      
      await authClient.logout();
      setIsConnected(false);
      setPrincipal(null);
      setIdentity(null);
    };
  
    // Create agent and actor instances for interacting with canisters
    const createActor = <T,>(canisterId: string, idlFactory: IDL.InterfaceFactory): ActorSubclass<T> | null => {
      if (!identity) return null;
  
      const agent = new HttpAgent({
        host,
        identity,
      });
  
      // For local development, you might need to disable certificate verification
      // if (process.env.NODE_ENV !== "production") {
      //   agent.fetchRootKey().catch(console.error);
      // }
 
      return Actor.createActor(idlFactory, {
        agent,
        canisterId,
      });
    };
  
    const value = {
      isConnected,
      principal,
      identity,
      connect,
      disconnect,
      createActor,
    };
  
    return <ICContext.Provider value={value}>{children}</ICContext.Provider>;
  }
  