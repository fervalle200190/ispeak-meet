import React from "react";

export default function HeaderIcons({ name }) {
  const ICONS = {
    search: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 154.78 154.77"
        className="h-5 fill-primary px-2"
      >
        <path d="M113.58,99.9A63.11,63.11,0,1,0,99.9,113.58l41.2,41.19,13.68-13.68Zm-50.7,6.51a43.53,43.53,0,1,1,43.53-43.53A43.58,43.58,0,0,1,62.88,106.41Z" />
      </svg>
    ),
    profile: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 483.2 483.16"
        className="h-7 fill-primary px-2"
      >
        <path d="M0,240.72C.47,108.09,109.78-.45,242.43,0S483.68,109.84,483.2,242.41,373.25,483.68,240.74,483.16C108.08,482.64-.46,373.32,0,240.72ZM409.34,386.33C476.1,317.6,493.11,180.79,401.46,86,313.77-4.68,168-4.19,80.67,87.13c-91.09,95.19-72.73,231.79-6.8,299.13,22.54-35.39,51.53-64.33,86.23-87.77,7.72-5.21,12.73-5.86,20.73.77,37.9,31.4,83.56,31.43,121.55.12,7.91-6.51,12.92-6.17,20.72-.89C357.76,322,386.8,350.9,409.34,386.33Z" />
        <path d="M329.06,193.12c-.69,33.47-10.52,63.4-35.78,86.62-30,27.56-72.35,27.57-102.74.52-35.89-32-47.61-93.18-26-136,17.6-35,56.54-52.7,97-44.18,38.05,8,64.34,40.09,67.54,82.51C329.29,186.06,329.06,189.6,329.06,193.12Z" />
      </svg>
    ),
  };

  return <>{ICONS[name]}</>;
}
