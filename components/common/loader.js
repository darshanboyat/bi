import Image from "next/image";
import { useState } from "react";

export default function loader() {
    return (
      <>
        <div className="position-loader">
            <img src='/images/biloader.gif' className="w-full"></img>
        </div>
      </>
    )
}