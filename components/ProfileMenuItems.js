"use client";

import PropTypes from "prop-types";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";

export default function ProfileMenuItems({ items }) {
  return (
    <div className="relative inline-block text-left w-full">
      <Menu as="div" className="w-full">
        <MenuButton className="p-2 text-gray-700 hover:text-gray-900 border border-transparent hover:border-gray-300 rounded focus:outline-none">
          <FontAwesomeIcon icon={faEllipsisV} size="xl" />
        </MenuButton>

        <MenuItems className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-50 focus:outline-none">
          <div className="py-1 text-sm text-gray-700">
            {items.map((item, index) => (
              <MenuItem key={index}>
                <button
                  onClick={item.onClick}
                  className={`w-full text-left px-4 py-2 hover:bg-gray-100 ${
                    item.isDanger
                      ? "text-red-500 hover:text-red-600"
                      : "text-gray-700"
                  }`}
                >
                  {item.label}
                </button>
              </MenuItem>
            ))}
          </div>
        </MenuItems>
      </Menu>
    </div>
  );
}

ProfileMenuItems.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      onClick: PropTypes.func.isRequired,
      isDanger: PropTypes.bool,
    })
  ).isRequired,
};
