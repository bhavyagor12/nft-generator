import ImageGenerator from "@/components/ImageGenerator";
import Navbar from "@/components/Navbar";
import { useState } from "react";

export default function Home({ response }: any) {
  const [active, setActive] = useState<boolean>(true);

  const activeTab = (e: any) => {
    const id = e.target.id;
    if (id === "1") {
      console.log("hiii");
      setActive(true);
    } else {
      setActive(false);
    }
  };
  return (
    <main>
      <Navbar />
      <div className="">
        <div className="tabs tabs-boxed flex justify-center items-center ">
          <a
            id="1"
            className={`tab tab-lg tab-lifted ${active ? "tab-active" : ""}`}
            onClick={activeTab}
          >
            Generate Image
          </a>
          <a
            id="2"
            className={`tab tab-lg tab-lifted ${!active ? "tab-active" : ""}`}
            onClick={activeTab}
          >
            Upload and Create NFT
          </a>
        </div>
        {active ? <ImageGenerator /> : "hi"}
      </div>
    </main>
  );
}
