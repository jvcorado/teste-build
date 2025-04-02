"use client";

import {
  FaWhatsapp,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaXTwitter,
  FaLink,
} from "react-icons/fa6";
import { toast } from "sonner";

type ShareButtonsProps = {
  postUrl: string;
  postTitle: string;
};

export default function ShareButtons({
  postUrl,
  postTitle,
}: ShareButtonsProps) {
  const copyLink = () => {
    navigator.clipboard.writeText(postUrl);
    toast.success("Link copiado para a área de transferência!", {
      position: "top-right",
    });
  };

  return (
    <div className="flex gap-2 flex-wrap">
      {/* Copiar link */}
      <button
        onClick={copyLink}
        className="bg-white border rounded-lg p-2  transition"
        title="Copiar link"
      >
        <FaLink className="hover:text-[#02A251] w-5 h-5" />
      </button>

      {/* WhatsApp */}
      <a
        href={`https://wa.me/?text=${encodeURIComponent(
          `${postTitle} - ${postUrl}`
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-white border rounded-lg p-2  transition"
        title="Compartilhar no WhatsApp"
      >
        <FaWhatsapp className="text-primary-black-800 transition-all duration-700 ease-in-out hover:text-[#3BB54A] w-5 h-5" />
      </a>

      {/* X (Twitter) */}
      <a
        href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
          postUrl
        )}&text=${encodeURIComponent(postTitle)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-white border rounded-lg p-2  transition"
        title="Compartilhar no X"
      >
        <FaXTwitter className="text-primary-black-800 transition-all duration-700 ease-in-out hover:text-gray-700 w-5 h-5" />
      </a>

      {/* Instagram - sem compartilhamento direto */}
      <a
        href="https://www.instagram.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-white border rounded-lg p-2  transition"
        title="Abrir Instagram"
      >
        <FaInstagram className="text-primary-black-800 transition-all duration-700 ease-in-out hover:text-pink-500 w-5 h-5" />
      </a>

      {/* LinkedIn */}
      <a
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
          postUrl
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-white border rounded-lg p-2  transition"
        title="Compartilhar no LinkedIn"
      >
        <FaLinkedinIn className="text-primary-black-800 transition-all duration-700 ease-in-out hover:text-[#1A76D2] w-5 h-5" />
      </a>

      {/* Facebook */}
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
          postUrl
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-white border rounded-lg p-2  transition"
        title="Compartilhar no Facebook"
      >
        <FaFacebookF className="text-primary-black-800 transition-all duration-700 ease-in-out hover:text-[#1A76D2] w-5 h-5" />
      </a>
    </div>
  );
}
