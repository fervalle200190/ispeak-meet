import React from "react";

export default function CourseIcons({ name }) {
  const ICONS = {
    check: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 115.94 90.1" className="fill-primary h-3">
        <path
          d="M113.34,6.79,109.15,2.6a8.87,8.87,0,0,0-12.55,0L40.21,59,19.34,38.15a8.87,8.87,0,0,0-12.55,0L2.6,42.34a8.89,8.89,0,0,0,0,12.57L36,88.36a5.9,5.9,0,0,0,8.37,0l68.94-69A8.89,8.89,0,0,0,113.34,6.79Z"
        />
      </svg>
    ),
    play: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 78.9 105.14" className="fill-primary h-3">
        <path
          d="M73.08,42.81l-58.35-40A14.24,14.24,0,0,0,7.06,0C2.7,0,0,3.51,0,9.37V95.78c0,5.86,2.7,9.36,7.05,9.36a14.07,14.07,0,0,0,7.63-2.84l58.38-40c3.76-2.58,5.84-6,5.84-9.77S76.84,45.38,73.08,42.81Z"
        />
      </svg>
    ),
  };

  return <>{ICONS[name]}</>;
}
