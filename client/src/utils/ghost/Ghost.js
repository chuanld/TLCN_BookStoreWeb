import React from "react";
import "./ghost.css";

export default function Ghost() {
  return (
    <div className="ghost-cloak">
      <div className="ghost">
        <div className="ghost-body">
          <div className="ghost-eye"></div>
          <div className="ghost-mouth"></div>
        </div>
      </div>
    </div>
  );
}
