import { useState } from "react";

const Community = () => {
  console.log("Community  pages routing component")
  const [title, setTitle] = useState<string>("hello");
  return(
    <div>
      Community{""}
      <button onClick={() => alert("hello Mit")} style={{ margin: "15" }}>
        PressMe
      </button >
      </div>
  )
};

export default Community;
