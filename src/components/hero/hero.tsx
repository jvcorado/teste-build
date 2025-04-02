"use client";

import React from "react";

export default function Hero() {
  return (
    <div
      className="relative w-full
  h-[calc(100vh_-_164px)] overflow-hidden"
    >
      {/* YouTube embed com botão de play */}
      <iframe
        className="absolute top-0 left-0 w-[177.78vh] h-screen sm:w-full sm:h-[56.25vw] sm:top-[-50%] sm:left-0"
        style={{
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
        src="https://www.youtube.com/embed/j_NK8w8SjOc?controls=1&modestbranding=1&rel=0"
        title="YouTube Video Background"
        frameBorder="0"
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>

      {/* Conteúdo por cima, se quiser */}
      {/*  <div className="relative z-10 flex items-center justify-center h-full bg-black/40">
        <div className="text-center text-white">
          <h1 className="text-4xl font-bold">Título Principal</h1>
          <p className="mt-4 text-lg">Descrição ou subtítulo aqui.</p>
        </div>
      </div> */}
    </div>
  );
}
