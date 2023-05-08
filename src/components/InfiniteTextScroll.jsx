import React, { useRef, useEffect } from "react";

const InfiniteTextScroll = ({ textItems }) => {
  const menuRef = useRef(null);

  useEffect(() => {
    let request;
    const animate = () => {
      const menu = menuRef.current;
      const firstItem = menu.children[0];
      const lastItem = menu.children[menu.children.length - 1];
      const menuWidth = menu.offsetWidth;
      const firstItemWidth = firstItem.offsetWidth;
      const lastItemWidth = lastItem.offsetWidth;
      const scrollLeft = menu.scrollLeft;

      // Check if the first item has been fully scrolled out of view
      if (scrollLeft >= firstItemWidth) {
        menu.scrollLeft = 0;
        menu.appendChild(firstItem);
      } else if (scrollLeft + menuWidth + lastItemWidth > menu.scrollWidth) {
        // Check if the last item is about to be fully scrolled into view
        menu.scrollLeft = menu.scrollWidth - menuWidth;
        menu.insertBefore(lastItem, menu.children[0]);
      }

      request = requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
    return () => cancelAnimationFrame(request);
  }, []);

  return (
    <div className="relative w-full overflow-hidden">
      <div
        className="absolute whitespace-nowrap"
        ref={menuRef}
        style={{ transform: "translateX(0)" }}
      >
        {textItems.map((text, index) => (
          <span key={index} className="inline-block px-4 py-2">
            {text}
          </span>
        ))}
      </div>
    </div>
  );
};

export default InfiniteTextScroll;
