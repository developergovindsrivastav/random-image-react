import React, { useEffect, useState } from "react";
import axios from "axios";
import { data } from "autoprefixer";
const App = () => {
  const [Images, setImages] = useState([]);
  const getmessage = async () => {
    const res = await axios.get("https://picsum.photos/v2/list");
    setImages(res.data);
    console.log(Images);
  };
  //can be used
  // useEffect(() => {
  //   getmessage();
  // }, []);

  return (
    <>
      <h1 className="text-white bg-black text-center text-3xl capitalize h-10 font-bold ">
        random image generator
      </h1>

      <div className=" flex justify-center items-start m-3">
        <button
          onClick={() => getmessage()}
          className=" capitalize text-white bg-black font-bold p-10 text-center flex justify-center items-center"
        >
          get images
        </button>
      </div>
      <div className="flex flex-wrap gap-2 w-full">
        {Images.map((e, i) => {
          return (
            <img
              src={e.download_url}
              key={i}
              height={200}
              width={200}
              alt="images alt"
            />
          );
        })}
      </div>
    </>
  );
};

export default App;
