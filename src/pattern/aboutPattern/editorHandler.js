export const handleCommandClick = (
  editor,
  command,
  params = "",
  setDropdownOpen
) => {
  if (command === "toggleHighlight") {
    editor.chain().focus().toggleHighlight({ color: params }).run();
  } else if (command === "setColor") {
    editor.chain().focus().setColor(params).run();
  } else if (command === "toggleHeading") {
    editor.chain().focus().toggleHeading({ level: params }).run();
  } else {
    editor.chain().focus()[command]().run();
  }
  if (setDropdownOpen) setDropdownOpen(null); // Close the dropdown after command execution
};

export const handleCommandColor = (
  event,
  command,
  setCurrentCommand,
  setOpenSketch
) => {
  event.preventDefault();
  setCurrentCommand(command);
  setOpenSketch((prevState) => !prevState);
};

export const handleChangeColor = (
  editor,
  color,
  currentCommand,
  setCurrentColor
) => {
  setCurrentColor(color.hex);
  if (currentCommand === "toggleHighlight") {
    editor.chain().focus().toggleHighlight({ color: color.hex }).run();
  } else if (currentCommand === "setColor") {
    editor.chain().focus().setColor(color.hex).run();
  }
};

export const handleOpenEditModal = (
  aboutId,
  setSelectedAbout,
  handleOpenModal
) => {
  setSelectedAbout(aboutId);
  handleOpenModal("edit");
};
