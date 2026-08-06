import { useEffect, useRef, useState } from "react";

function ContextMenu({ children, items = [], className = "" }) {
  const menuRef = useRef(null);
  const [menu, setMenu] = useState({ isOpen: false, x: 0, y: 0 });

  useEffect(() => {
    function closeMenu(event) {
      if (!menuRef.current?.contains(event.target)) {
        setMenu((current) => ({ ...current, isOpen: false }));
      }
    }

    function closeOnEscape(event) {
      if (event.key === "Escape") {
        setMenu((current) => ({ ...current, isOpen: false }));
      }
    }

    document.addEventListener("mousedown", closeMenu);
    document.addEventListener("keydown", closeOnEscape);

    return () => {
      document.removeEventListener("mousedown", closeMenu);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, []);

  function handleContextMenu(event) {
    event.preventDefault();

    setMenu({
      isOpen: true,
      x: Math.min(event.clientX, window.innerWidth - 224),
      y: Math.min(event.clientY, window.innerHeight - 240),
    });
  }

  function handleItemClick(item) {
    item.onClick?.();
    setMenu((current) => ({ ...current, isOpen: false }));
  }

  return (
    <>
      <span className={className} onClick={handleContextMenu}>
        {children}
      </span>

      {menu.isOpen && (
        <div
          ref={menuRef}
          role="menu"
          className="fixed z-50 w-56 rounded-xl border border-slate-700/80 bg-slate-900/80 p-1.5 shadow-2xl shadow-black/30 backdrop-blur-xl"
          style={{ top: menu.y, left: menu.x }}
        >
          {items.map((item) => (
            <button
              key={item.label}
              type="button"
              role="menuitem"
              disabled={item.disabled}
              onClick={() => handleItemClick(item)}
              className={`flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-sm transition-colors disabled:cursor-not-allowed disabled:opacity-50 ${item.variant === "danger" ? "text-red-300 hover:bg-red-500/15" : "text-slate-300 hover:bg-violet-500/15 hover:text-violet-100"}`}
            >
              {item.icon && (
                <span className="flex size-4 items-center justify-center">
                  {item.icon}
                </span>
              )}
              {item.label}
            </button>
          ))}
        </div>
      )}
    </>
  );
}

export default ContextMenu;
