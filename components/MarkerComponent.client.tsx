"use client";

import markerSDK from "@marker.io/browser";
import { useEffect } from "react";

export default function MarkerComponent() {
  useEffect(() => {
    markerSDK.loadWidget({
      // project: '65aa380846277c1838792517',
      project: "65ae043568162c245ca57462",
    });
  }, []);

  return null;
}
