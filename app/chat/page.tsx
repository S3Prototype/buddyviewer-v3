"use client";

import { useChat } from "ai/react";

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();
  return (
    <div
      style={{
        minHeight: "300px",
        flexDirection: "column",
        alignContent: "center",
        justifyItems: "center",
      }}
    >
      {messages.map((m) => (
        <div key={m.id} style={{ margin: "20px" }}>
          {m.role === "user" ? "User: " : "AI: "}
          {m.content}
        </div>
      ))}
      {!messages.length && <p>Nothing here...</p>}
      <form onSubmit={handleSubmit}>
        <input
          style={{ margin: "20px" }}
          className="fixed bottom-0 w-full max-w-md p-2 mb-8 border border-gray-300 rounded shadow-xl"
          value={input}
          placeholder="Say something..."
          onChange={handleInputChange}
        />
      </form>
    </div>
  );
}
