import{R as t,a as s}from"./vendor.cd7509fb.js";const c=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}};c();var i="assets/logo.ecc203fb.svg";function d(){return t.createElement("div",{className:"flex flex-col justify-center h-screen bg-gray-800 text-gray-50"},t.createElement("header",{className:"space-y-6 text-center "},t.createElement("img",{src:i,className:"mx-auto h-[100px] w-[100px] animate-spin",alt:"logo"}),t.createElement("h1",{className:"text-2xl xl:text-4xl"},"Hello Vite + React + TailwindCSS!"),t.createElement("p",{className:"italic"},"Edit ",t.createElement("code",null,"App.tsx")," and save to test HMR updates."),t.createElement("p",{className:"divide-x divide-gray-50"},t.createElement("a",{className:"px-4 text-purple-300 hover:underline",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer"},"Learn React"),t.createElement("a",{className:"px-4 text-purple-300 hover:underline",href:"https://vitejs.dev/guide/features.html",target:"_blank",rel:"noopener noreferrer"},"Vite Docs"),t.createElement("a",{className:"px-4 text-purple-300 hover:underline",href:"https://tailwindcss.com/docs",target:"_blank",rel:"noopener noreferrer"},"TailwindCSS Doc"))))}s.render(t.createElement(t.StrictMode,null,t.createElement(d,null)),document.getElementById("root"));