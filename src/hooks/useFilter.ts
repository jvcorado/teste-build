

import { useState, useRef, useEffect } from "react";

export default function useFilter(initialTags: { title: string; text: string }[]) {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedTag, setSelectedTag] = useState<string | null>(null);
    const [filteredTags, setFilteredTags] = useState(initialTags);
    const tagRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
    const contentRef = useRef<HTMLDivElement>(null);
    const observerRef = useRef<IntersectionObserver | null>(null);
    const isClickScrolling = useRef(false); // 🆕 controle de clique manual

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const query = e.target.value;
        setSearchQuery(query);

        const filtered = query === ""
            ? initialTags
            : initialTags.filter(
                (tag) =>
                    tag.title.toLowerCase().includes(query.toLowerCase()) ||
                    tag.text.toLowerCase().includes(query.toLowerCase())
            );

        setFilteredTags(filtered);
        setSelectedTag(filtered[0]?.title || null);
    };

    const handleClear = () => {
        setSearchQuery("");
        setFilteredTags(initialTags);
        setSelectedTag(null);
    };

    const handleTagClick = (tagTitle: string) => {
        setSelectedTag(tagTitle);
        isClickScrolling.current = true;

        const tagElement = tagRefs.current[tagTitle];
        if (tagElement && contentRef.current) {
            contentRef.current.scrollTo({
                top: tagElement.offsetTop - contentRef.current.offsetTop,
                behavior: "smooth",
            });
        }

        setTimeout(() => {
            isClickScrolling.current = false;
        }, 800); // tempo suficiente pro scroll terminar
    };

    useEffect(() => {
        if (!contentRef.current || filteredTags.length === 0) return;

        observerRef.current = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && !isClickScrolling.current) {
                        const tagTitle = entry.target.getAttribute("data-tag-title");
                        if (tagTitle) setSelectedTag(tagTitle);
                    }
                });
            },
            { root: contentRef.current, threshold: 0.5 }
        );

        filteredTags.forEach((tag) => {
            const element = tagRefs.current[tag.title];
            if (element) observerRef.current?.observe(element);
        });

        return () => observerRef.current?.disconnect();
    }, [filteredTags]);

    return {
        searchQuery,
        filteredTags,
        selectedTag,
        contentRef,
        tagRefs,
        handleInputChange,
        handleClear,
        handleTagClick,
    };
}
