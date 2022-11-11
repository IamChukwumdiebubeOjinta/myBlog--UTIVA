import React from "react";
import { Card } from "..";
import { Dashboard } from "../../Pages";

export default function ReadBlog() {
  return (
    <>
      <Dashboard>
        <div className="w-full my-5">
          <Card />
        </div>
      </Dashboard>
    </>
  );
}
