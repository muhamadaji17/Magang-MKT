export const createDragDropHandlers = (options = {}) => {
  const {
    onDragStartCallback = () => {},
    onDragEndCallback = () => {},
    onDropCallback = () => {},
    dragOpacity = "0.5",
    dropHighlightClass = "bg-gray-200",
  } = options;

  return {
    dragHandlers: {
      onDragStart: (event, item) => {
        event.dataTransfer.setData("application/json", JSON.stringify(item));
        event.currentTarget.style.opacity = dragOpacity;
        onDragStartCallback(event, item);
      },
      onDragEnd: (event) => {
        event.currentTarget.style.opacity = "1";
        onDragEndCallback(event);
      },
    },
    dropHandlers: {
      onDragOver: (event) => {
        event.preventDefault();
        event.currentTarget.classList.add(dropHighlightClass);
      },
      onDragLeave: (event) => {
        event.currentTarget.classList.remove(dropHighlightClass);
      },
      onDrop: (event, dropData) => {
        event.preventDefault();
        event.currentTarget.classList.remove(dropHighlightClass);

        // Get the dragged item from the dataTransfer
        try {
          const draggedItem = JSON.parse(
            event.dataTransfer.getData("application/json")
          );
          onDropCallback(event, draggedItem, dropData);
        } catch (error) {
          console.error("Error parsing dragged item:", error);
        }
      },
    },
  };
};
