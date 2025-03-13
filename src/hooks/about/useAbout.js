import { fetchAbout } from "@/services/about/aboutService";
import { useEffect, useRef, useState } from "react";
import useGlobalHook from "../useGlobalHook";

export const useAbout = (editor) => {
  const [about, setAbout] = useState([]);
  const [currentColor, setCurrentColor] = useState("#fff");
  const [currentCommand, setCurrentCommand] = useState(null);
  const [openSketch, setOpenSketch] = useState(false);
  const sketchPickerRef = useRef(null);

  const handleCommandClick = (event, command, params = "") => {
    if (command === "toggleHighlight") {
      editor.chain().focus().toggleHighlight({ color: params }).run();
    } else if (command === "setColor") {
      editor.chain().focus().setColor(params).run();
    } else {
      event.preventDefault();
      editor.chain().focus()[command]().run();
    }
  };

  const handleCommandColor = (event, command) => {
    event.preventDefault();
    setCurrentCommand(command);
    setOpenSketch(!openSketch);
  };

  const handleChangeColor = (color) => {
    setCurrentColor(color.hex);
    if (currentCommand === "toggleHighlight") {
      editor.chain().focus().toggleHighlight({ color: color.hex }).run();
    } else if (currentCommand === "setColor") {
      editor.chain().focus().setColor(color.hex).run();
    }
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
    const handleClickOutside = (event) => {
      const isButtonClick =
        event.target.closest("button") &&
        event.target.closest("button").onclick === handleCommandColor;

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
  }, [openSketch]);

  return {
    refresh,
    handleOpenModal,
    setRefresh,
    about,
    handleCloseModal,
    modalIsOpen,
    modalType,
    token,
    handleCommandClick,
    handleCommandColor,
    openSketch,
    setOpenSketch,
    sketchPickerRef,
    currentColor,
    handleChangeColor,
  };
};
