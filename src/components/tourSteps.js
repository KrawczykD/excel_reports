import React from "react";

const text = [
  "Welcome! Use arrow key or click arrow on screen to start Tour...",
  "Choose start date, end date and click download to create Macro file. Open SAP, go to Production and stay there. Run macro file to download reports to 'C:/reports'. Be sure this folder is empty before you start! Simple!",
  "Click me, go to 'c:/reports' and upload reports! You can load as many files you want in one go!",
  "Click me to upload chosen reports.",
  "Hover over me to see how many, and what reports you loaded!",
  "Push to generate reports from loaded files!",
  "Pick any of those views to see what I generated for you!",
  "Here you can see how many duplicate you have. Button on the right downlaod for you everythink from this table! ",
  "Click me to remove or added duplicates!",
  "If you are happy with report move it to database!",
  "Click me to browse database!",
  "Hover over me to see list of variants preperd for you to downlaod.",
];

let steps = [];

text.map((item, index) => {
  let step = {
    selector: `.tour-${index}`,
    content: ({ goTo, inDOM }) => (
      <div style={{ fontSize: "20px", color: "white" }}>{inDOM && item}</div>
    ),
    position: "bottom",
    action: (node) => {
      node.focus();
    },
    style: {
      backgroundColor: "#7ab800",
    },
  };
  steps.push(step);
});

// const steps = [
//   {
//     selector: ".tour-1",
//     content: ({ goTo, inDOM }) => (
//       <div>
//         {inDOM &&
//           "Choose start date, end date and click download to create Macro file. Open SAP, go to Production and stay there. Run macro file to download reports to 'C:/reports'. Be sure this folder is empty before you start! Simple!"}
//       </div>
//     ),
//     position: "top",
//     action: (node) => {
//       node.focus();
//     },
//     style: {
//       backgroundColor: "#bada55",
//     },
//   },
//   {
//     selector: ".tour-2",
//     content: ({ goTo, inDOM }) => (
//       <div>
//         {inDOM &&
//           "Click me, go to 'c:/reports' and upload reports! You can load as many files you want in one go!"}
//       </div>
//     ),
//     position: "top",
//     action: (node) => {
//       node.focus();
//     },
//     style: {
//       backgroundColor: "#bada55",
//     },
//   },
//   {
//     selector: ".tour-3",
//     content: ({ goTo, inDOM }) => (
//       <div>{inDOM && "Click me to upload choosen reports."}</div>
//     ),
//     position: "top",
//     action: (node) => {
//       node.focus();
//     },
//     style: {
//       backgroundColor: "#bada55",
//     },
//   },
//   {
//     selector: ".tour-4",
//     content: ({ goTo, inDOM }) => (
//       <div>
//         {inDOM && "Hover over me to see how many, and what reports you loaded!"}
//       </div>
//     ),
//     position: "top",
//     action: (node) => {
//       node.focus();
//     },
//     style: {
//       backgroundColor: "#bada55",
//     },
//   },
//   {
//     selector: ".tour-5",
//     content: ({ goTo, inDOM }) => (
//       <div>{inDOM && "Push to generate reports from loaded files!"}</div>
//     ),
//     position: "top",
//     action: (node) => {
//       node.focus();
//     },
//     style: {
//       backgroundColor: "#bada55",
//     },
//   },
//   {
//     selector: ".tour-6",
//     content: ({ goTo, inDOM }) => (
//       <div>
//         {inDOM && "Pick any of those views to see what I generated for you!"}
//       </div>
//     ),
//     position: "top",
//     action: (node) => {
//       node.focus();
//     },
//     style: {
//       backgroundColor: "#bada55",
//     },
//   },
//   {
//     selector: ".tour-8",
//     content: ({ goTo, inDOM }) => (
//       <div>{inDOM && "Clik me to remove or added duplicates!"}</div>
//     ),
//     position: "top",
//     action: (node) => {
//       node.focus();
//     },
//     style: {
//       backgroundColor: "#bada55",
//     },
//   },
//   {
//     selector: ".tour-7",
//     content: ({ goTo, inDOM }) => (
//       <div>
//         {inDOM &&
//           "Here you can see how many duplicate you have. Button on the right downlaod for you everythink from this table! "}
//       </div>
//     ),
//     position: "top",
//     action: (node) => {
//       node.focus();
//     },
//     style: {
//       backgroundColor: "#bada55",
//     },
//   },
//   {
//     selector: ".tour-9",
//     content: ({ goTo, inDOM }) => (
//       <div>{inDOM && "If you are happy with report move it to database!"}</div>
//     ),
//     position: "top",
//     action: (node) => {
//       node.focus();
//     },
//     style: {
//       backgroundColor: "#bada55",
//     },
//   },
//   {
//     selector: ".tour-10",
//     content: ({ goTo, inDOM }) => (
//       <div>{inDOM && "Click me to browse database!"}</div>
//     ),
//     position: "top",
//     action: (node) => {
//       node.focus();
//     },
//     style: {
//       backgroundColor: "#bada55",
//     },
//   },
//   {
//     selector: ".tour-11",
//     content: ({ goTo, inDOM }) => (
//       <div>
//         {inDOM &&
//           "Hover over me to see list of variants preperd for you to downlaod."}
//       </div>
//     ),
//     position: "top",
//     action: (node) => {
//       node.focus();
//     },
//     style: {
//       backgroundColor: "#bada55",
//     },
//   },
// ];

export default steps;
