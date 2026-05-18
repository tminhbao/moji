import { useAuthStore } from "@/stores/useAuthStore";
import React from "react";

const ChatAppPage = () => {
  const { user } = useAuthStore((s) => s.user);
  return <div>ChatAppPage</div>;
};

export default ChatAppPage;
