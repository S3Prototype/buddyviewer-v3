import { createContext } from "react";
import { TabItem } from "@/types/enums";

const ActiveTabContext = createContext({
  activeTab: TabItem.Default,
  setActiveTab: (tab: TabItem) => {},
});

export default ActiveTabContext;
