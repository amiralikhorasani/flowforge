import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import useOutsideClick from "../../hooks/useOutsideClick";
import Container from "./Container";

function DropdownItem({ item, onSelect, index }) {
  const isAction = item.action && !item.to;
  const handleClick = (e) => {
    e.preventDefault();
    if (isAction) {
      onSelect?.(item.action);
    } else if (item.to) {
      onSelect?.(item.to);
    }
  };

  return (
    <motion.button
      onClick={handleClick}
      className={`w-full flex items-center gap-3 px-3 py-2.5 text-sm text-slate-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors ${item.disabled ? "opacity-50 pointer-events-none" : ""}`}
      whileHover={{ x: 4 }}
      whileTap={{ scale: 0.98 }}
      disabled={item.disabled}
      type="button"
    >
      <span className="flex-shrink-0 text-slate-400" aria-hidden="true">
        {item.icon}
      </span>
      <span className="font-medium">{item.label}</span>
      {item.shortcut && (
        <span className="ml-auto text-xs text-slate-500">{item.shortcut}</span>
      )}
      {item.badge && (
        <span className="ml-auto px-2 py-0.5 text-xs bg-violet-500/20 text-violet-300 rounded">
          {item.badge}
        </span>
      )}
    </motion.button>
  );
}

function DropdownDivider() {
  return <div className="my-2 border-t border-white/5" role="separator" />;
}

export default function Dropdown({
  items,
  onSelect,
  triggerRef,
  position = "bottom-start",
  className = "",
  align = "start",
}) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const combinedRef = (el) => {
    dropdownRef.current = el;
    if (triggerRef && typeof triggerRef === "function") triggerRef(el);
    else if (triggerRef && typeof triggerRef === "object") triggerRef.current = el;
  };

  useOutsideClick(dropdownRef, () => setIsOpen(false));

  const toggle = () => setIsOpen((prev) => !prev);
  const close = () => setIsOpen(false);

  const positions = {
    "bottom-start": "top-full left-0 mt-1 origin-top-left",
    "bottom-end": "top-full right-0 mt-1 origin-top-right",
    "top-start": "bottom-full left-0 mb-1 origin-bottom-left",
    "top-end": "bottom-full right-0 mb-1 origin-bottom-right",
    "left-start": "right-full top-0 mr-1 origin-left",
    "left-end": "right-full bottom-0 mr-1 origin-left",
    "right-start": "left-full top-0 ml-1 origin-right",
    "right-end": "left-full bottom-0 ml-1 origin-right",
  };

  const positionClass = positions[position] || positions["bottom-start"];

  return (
    <div ref={combinedRef} className={`relative inline-block ${className}`}>
      <div className="relative z-10">
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-40"
            onClick={close}
            aria-hidden="true"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
        )}
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={dropdownRef}
            className={`absolute z-50 min-w-[200px] ${positionClass} ${align === "center" ? "-translate-x-1/2" : ""}`}
            initial={{ opacity: 0, scale: 0.95, y: position.startsWith("top") ? 10 : -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: position.startsWith("top") ? 10 : -10 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
            role="menu"
            aria-orientation="vertical"
          >
            <Container className="p-2 shadow-2xl shadow-black/50">
              {items.map((item, index) => {
                if (item.type === "divider" || item.label === "divider") {
                  return <DropdownDivider key={`divider-${index}`} />;
                }
                return (
                  <DropdownItem
                    key={item.to || item.action || item.label || index}
                    item={item}
                    onSelect={(value) => {
                      onSelect?.(value);
                      close();
                    }}
                    index={index}
                  />
                );
              })}
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}