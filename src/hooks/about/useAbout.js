import { fetchAbout } from "@/services/about/aboutService";
import { useEffect, useRef, useState } from "react";
import useGlobalHook from "../useGlobalHook";
import {
  handleChangeColor,
  handleCommandClick,
  handleCommandColor,
  handleOpenEditModal,
} from "@/pattern/aboutPattern/editorHandler";

export const useAbout = (editor, defaultValues) => {
  const [about, setAbout] = useState([]);
  const [selectedAbout, setSelectedAbout] = useState(null);
  const [currentColor, setCurrentColor] = useState("#fff");
  const [currentCommand, setCurrentCommand] = useState(null);
  const [openSketch, setOpenSketch] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(null);
  const sketchPickerRef = useRef(null);
  const dropDownRef = useRef(null);

  const onCommandClick = (event, command, params = "") => {
    handleCommandClick(editor, command, params, setDropdownOpen);
  };

  const onCommandColor = (event, command) => {
    handleCommandColor(event, command, setCurrentCommand, setOpenSketch);
  };

  const onChangeColor = (color) => {
    handleChangeColor(editor, color, currentCommand, setCurrentColor);
  };

  const onOpenEditModal = (aboutId) => {
    handleOpenEditModal(aboutId, setSelectedAbout, handleOpenModal);
  };

  const toggleDropdown = (e, index) => {
    e.preventDefault();
    setDropdownOpen(isDropdownOpen === index ? null : index);
  };

  const {
    refresh,
    token,
    handleOpenModal,
    setRefresh,
    handleCloseModal,
    modalIsOpen,
    modalType,
  } = useGlobalHook();

  useEffect(() => {
    fetchAbout(token, { setAbout });
  }, [refresh]);

  useEffect(() => {
    if (editor && defaultValues) {
      editor.commands.setContent(defaultValues);
    }
  }, [editor, defaultValues]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      const isButtonClick =
        event.target.closest("button") &&
        event.target.closest("button").onclick === handleCommandColor;

      if (
        dropDownRef.current &&
        !dropDownRef.current.contains(event.target) &&
        isDropdownOpen !== null
      ) {
        setDropdownOpen(null);
      }
      if (
        openSketch &&
        sketchPickerRef.current &&
        !sketchPickerRef.current.contains(event.target) &&
        !isButtonClick
      ) {
        setOpenSketch(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openSketch, isDropdownOpen]);

  return {
    refresh,
    handleOpenModal,
    setRefresh,
    about,
    handleCloseModal,
    onChangeColor,
    onCommandClick,
    onCommandColor,
    onOpenEditModal,
    selectedAbout,
    modalIsOpen,
    modalType,
    token,
    openSketch,
    setOpenSketch,
    sketchPickerRef,
    currentColor,
    isDropdownOpen,
    toggleDropdown,
    dropDownRef,
  };
};
