import { useRef } from "react";
import yts from "yt-search";

const handleSubmit = (searchText: string, setActiveTab: any) => {
  (async () => {
    const result = await yts(searchText);
  })();
  setActiveTab(1);
};

function VideoSearch({ setActiveTab }: { setActiveTab: any }) {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <div>
      <input
        ref={inputRef}
        type="text"
        placeholder="Search"
        onSubmit={() =>
          handleSubmit(inputRef?.current?.value || "", setActiveTab)
        }
      />
    </div>
  );
}

export default VideoSearch;
