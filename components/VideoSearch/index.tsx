import ActiveTabContext from "@/context/ActiveTabContext";
import { TabItem } from "@/types/enums";
import { useContext, useRef } from "react";
import styles from "./VideoSearch.module.css";

const isUrl = (inputValue: string) => {
  return inputValue.includes("youtu");
};

function VideoSearch({ setVideoUrl }: { setVideoUrl: (url: string) => void }) {
  const { setActiveTab } = useContext(ActiveTabContext);
  const inputRef = useRef<HTMLInputElement>(null);
  const handleSubmit = () => {
    const inputValue = inputRef?.current?.value;
    if (!inputValue) return;
    if (isUrl(inputValue)) {
      setVideoUrl(inputValue);
      return;
    }
    (async () => {
      console.log("Search result:\n");
    })();
    console.log("Set the tab");
    setActiveTab(TabItem.SearchResults);
  };

  return (
    <div className={styles.searchContainer}>
      <input
        className={styles.searchInput}
        ref={inputRef}
        type="text"
        placeholder="Search"
      />
      <button onClick={handleSubmit}>Search</button>
    </div>
  );
}

export default VideoSearch;
