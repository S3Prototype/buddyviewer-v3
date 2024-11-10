import { useContext } from "react";
import Chat from "./tabs/Chat";
import Recommendeds from "./tabs/Recommendeds";
import SearchResults from "./tabs/SearchResults";
import ActiveTabContext from "@/context/ActiveTabContext";
import styles from "./SideTabs.module.css";
import { TabItem } from "@/types/enums";

const ActiveTab = () => {
  const { activeTab } = useContext(ActiveTabContext);
  switch (activeTab) {
    case TabItem.SearchResults:
      return <p>Search Results</p>;
    case TabItem.Chat:
      return <p>Chat</p>;
    default:
      return <p>Recommendeds</p>;
  }
};

const TabButtons = () => {
  const { setActiveTab } = useContext(ActiveTabContext);
  const tabNames = [
    { name: "Recommendeds", value: TabItem.Recommendeds },
    { name: "Search Results", value: TabItem.SearchResults },
    { name: "Chat", value: TabItem.Chat },
  ];
  return (
    <div className={styles.tabButtonContainer}>
      {tabNames.map(({ name, value }, index) => (
        <button
          className={styles.tabButton}
          key={name + index}
          type="button"
          onClick={() => setActiveTab(value)}
        >
          {name}
        </button>
      ))}
    </div>
  );
};

function SideTabs() {
  return (
    <div className={styles.tabContainer}>
      <TabButtons />
      <ActiveTab />
    </div>
  );
}

export default SideTabs;
