'use client'
import { useEffect, useRef } from 'react';
import { IconChevronUp } from '@tabler/icons-react';

export default function ButtonToTop() {
    const buttonScrollTop = useRef(null);

    function scrollTop() {
        if (document.documentElement.scrollTop < 400) {
            buttonScrollTop.current?.classList.add("hidden");
        } else {
            buttonScrollTop.current?.classList.remove("hidden");
        }
    };
    useEffect(() => {
        window.addEventListener("scroll", scrollTop);
        return () => {
            window.removeEventListener("scroll", scrollTop);
        };
    });

    return (
        <button
            onClick={() => {
                document.body.scrollTop = 0;
                document.documentElement.scrollTop = 0;
            }}
            ref={buttonScrollTop}
            className="button-to-top hidden"
        >
            <IconChevronUp color='black' />
        </button>
    );
};
