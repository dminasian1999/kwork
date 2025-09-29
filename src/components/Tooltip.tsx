import React from "react"

const Tooltip = ({ text, children }) => (
  <div className="relative flex flex-col items-center group">
    {children}
    <div className="absolute top-full flex flex-col items-center hidden mt-2 group-hover:flex w-max z-20">
      <div className="bg-gray-700 text-white text-xs rounded-lg py-2 px-3 shadow-xl">
        {text}
      </div>
    </div>
  </div>
)
export default Tooltip
