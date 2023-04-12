import Navbar from "@/components/Navbar";
import { useState } from "react";
import { Configuration, OpenAIApi } from "openai";
import axios from "axios";

export async function getConfiguration() {
  const configuration = new Configuration({
    organization: "org-cRTGvDPCfiWZlnI7IGcJxdAz",
    apiKey: process.env.NEXT_PUBLIC_OPEN_AI,
  });
  const openai = new OpenAIApi(configuration);
}

export default function Home({ response }: any) {
  const [prompt, setPrompt] = useState<string>("");
  const [image, setImage] = useState<string>("");
  const [isImage, setIsImage] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const generateImage = async () => {
    setLoading(true);
    const openaiApiKey = process.env.NEXT_PUBLIC_OPEN_AI;
    const apiUrl = "https://api.openai.com/v1/images/generations";

    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${openaiApiKey}`,
    };
    const data = {
      prompt: prompt,
      n: 1,
      size: "256x256",
    };

    axios
      .post(apiUrl, data, { headers })
      .then((response) => {
        setLoading(false);
        setIsImage(true);
        setImage(response.data.data[0].url);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <main>
      <Navbar />
      <div className="flex flex-col items-center justify-center gap-6 mt-[2%]">
        <div className="w-[60vw] gap-y-6">
          <h1 className="text-xl font-bold mb-[2%]">
            Enter prompt to generate image
          </h1>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full "
            onChange={(e) => setPrompt(e.target.value)}
          />
        </div>
        {!isImage && !loading && (
          <button className="btn btn-primary" onClick={generateImage}>
            Generate Image
          </button>
        )}
        {isImage && !loading && <img src={image} alt="Generated Image" />}
      </div>
    </main>
  );
}
