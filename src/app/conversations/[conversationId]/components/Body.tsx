"use client";
import useConversation from "@/hooks/useConversation";
import { pusherClient } from "@/libs/pusher";
import { FullMessageType } from "@/types";
// import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import MessageBox from "./MessageBox";

const Body = () => {
  const [messages, setMessages] = useState<FullMessageType>([]);
  const { conversationId } = useConversation();
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    pusherClient.subscribe(conversationId);

    const messageHandler = (message: FullMessageType) => {
      // axios.post(`/api/conversations/${conversationId}/seen`);
      console.log("@@@@", message);
      setMessages((current) => {
        if (find(current, { id: message.id })) {
          return current;
        }
        return [...current, message];
      });
      bottomRef?.current.scrollIntoView();
    };

    pusherClient.bind("messages:new", messageHandler);
    return () => {
      pusherClient.unsubscribe(conversationId);
      pusherClient.unbind("messages:new", messageHandler);
    };
  }, [conversationId]);
  return (
    <div className="flex-1 overflow-y-auto">
      {messages.map((message, i) => (
        <MessageBox
          isLast={i === messages.length - 1}
          key={message.id}
          data={message}
        />
      ))}
      <div className="pt-24" ref={bottomRef} />
    </div>
  );
};
export default Body;
