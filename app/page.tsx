"use client";
import ReactPlayer from "react-player";
import styles from "./page.module.css";
import SideTabs from "@/components/SideTabs";
import VideoSearch from "@/components/VideoSearch";
import { useState } from "react";
import { TabItem } from "@/types/enums";
import ActiveTabContext from "@/context/ActiveTabContext";

export default function Home() {
  const [activeTab, setActiveTab] = useState(TabItem.Default);
  const [videoUrl, setVideoUrl] = useState("https://youtu.be/YN7oC4xs0MM");
  return (
    <ActiveTabContext.Provider value={{ activeTab, setActiveTab }}>
      <main className={styles.main}>
        <div className={styles.content}>
          <div className={styles.playerContainer}>
            <ReactPlayer
              className={styles.player}
              controls={true}
              url={videoUrl}
            />
            <VideoSearch setVideoUrl={setVideoUrl} />
          </div>
          <SideTabs />
        </div>
      </main>
    </ActiveTabContext.Provider>
  );
}
