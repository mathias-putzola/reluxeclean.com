// app/panel/page.tsx

"use client";

import { useEffect, useState } from "react";
import AvailabilityForm from "./Avaibality";

const PanelPage = () => {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Gestion du Planning</h1>
      <AvailabilityForm />
    </div>
  );
};

export default PanelPage;