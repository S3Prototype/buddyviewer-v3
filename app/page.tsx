"use client";
import ReactPlayer from "react-player";
import styles from "./page.module.css";
import SideTabs from "@/components/SideTabs";
import VideoSearch from "@/components/VideoSearch";
import { useState } from "react";

export default function Home() {
  const { setActiveTab, activeTab } = useState(0);

  return (
    <main className={styles.main}>
      <div>
        <ReactPlayer
          className={styles.player}
          controls={true}
          url="https://youtu.be/YN7oC4xs0MM"
        />
        <VideoSearch setActiveTab={setActiveTab} />
      </div>
      <SideTabs />
    </main>
  );
}
