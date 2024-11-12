
"use client"

import { ICContext } from "@/providers/ICprovider";
import { useContext } from "react";

// Custom hook for using IC context
export const useIC = () => {
    const context = useContext(ICContext);
    if (!context) {
      throw new Error('useIC must be used within an ICProvider');
    }
    return context;
  };