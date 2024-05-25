import React from "react";
import { useFormStatus } from "react-dom";
import { FaPaperPlane } from "react-icons/fa";

const SubmitButton = () => {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      className="flex items-center justify-center gap-2 h-[3rem] rounded-full text-white transition-all outline-none bg-gray-900 w-[7rem] group disabled:scale-100 disabled:bg-opacity-65"
      disabled={pending}
    >
      {pending ? (
        <div className="h-5 w-5 animate-bounce rounded-full border-b-2 border-white"></div>
      ) : (
        <>
          Sumbt{" "}
          <FaPaperPlane className="text-xs transition-all group-hover:translate-x-1 group-hover:-translate-y-1 focus:scale-110 hover:scale-110 active:scale-105 hover:bg-gray-950" />
        </>
      )}
    </button>
  );
};

export default SubmitButton;
