import { Button } from "../atom";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { ConfirmDelete, EventLabel, Sidebar, TableHead } from "../molecules";
import { addMonths, format, subMonths } from "date-fns";
import { useCalendar } from "../../hook/useCalendar";
import { dayNames } from "../../pattern";
import {
  handleCancel,
  handleDragStart,
  handleDrop,
  handleSave,
} from "../../pattern/calendarLogic";
import { ModalLayout } from "../layouts";

const Calendar = ({
  dataEvent,
  dataEvents,
  handleService,
  submitType,
  handleServiceWithOnClick,
  stateShowSidebar,
  stateShowModal,
  inputForm,
}) => {
  const {
    calendarData,
    events,
    currentDate,
    updatedEvents,
    setCurrentDate,
    setUpdatedEvents,
    draggedEvent,
    setEvents,
    setDraggedEvent,
    isEventOnDate,
    originalEvents,
    isToday,
    normalizeDate,
  } = useCalendar(dataEvents);

  return (
    <div className="overflow-x-auto">
      <div className="min-h-screen min-w-[1000px]  bg-white shadow">
        <div className="flex justify-between w-full items-center border-t border-l  border-r rounded-t-sm border-gray-400 p-4">
          <h2 className="text-lg font-bold flex-1">
            {format(currentDate, "MMMM yyyy")}
          </h2>

          <div className="flex-1/7 flex justify-between">
            <div className="flex items-center gap-2">
              <Button onClick={() => setCurrentDate(subMonths(currentDate, 1))}>
                <IoIosArrowBack />
              </Button>
              <Button
                className={"px-3 py-1 bg-blue-500 rounded-sm text-white"}
                onClick={() => setCurrentDate(new Date())}
              >
                Today
              </Button>
              <Button onClick={() => setCurrentDate(addMonths(currentDate, 1))}>
                <IoIosArrowForward />
              </Button>
            </div>

            <div className="space-x-1.5">
              <Button
                className={"px-3 py-1 bg-green-500 rounded-sm text-white"}
                onClick={() =>
                  handleSave(
                    updatedEvents,
                    handleServiceWithOnClick,
                    setUpdatedEvents
                  )
                }
              >
                Save
              </Button>
              <Button
                className={"px-3 py-1 bg-gray-300 rounded-sm "}
                onClick={() => {
                  if (updatedEvents.length > 0) {
                    handleCancel(setEvents, originalEvents, setUpdatedEvents);
                  }
                }}
              >
                Cancel
              </Button>
            </div>
          </div>
        </div>
        <div className="w-full ">
          <table className="w-full border-collapse border border-gray-300">
            <TableHead configTable={dayNames} />
            <tbody>
              {calendarData.map((week, i) => (
                <tr key={i}>
                  {week.map((date, weekindex) => (
                    <td
                      key={weekindex}
                      scope="row"
                      className={`border border-gray-400 text-center cursor-pointer h-40 w-40 align-top  ${
                        date.getMonth() !== currentDate.getMonth()
                          ? "text-gray-400"
                          : ""
                      }`}
                      onDragOver={(e) => e.preventDefault()}
                      onDrop={() =>
                        handleDrop(
                          date,
                          draggedEvent,
                          setEvents,
                          setUpdatedEvents,
                          setDraggedEvent
                        )
                      }
                    >
                      <div
                        className={`text-sm w-full flex justify-end font-bold p-1 `}
                      >
                        <span
                          className={`${
                            isToday(date) ? " bg-blue-600 text-white" : ""
                          } flex items-center justify-center w-8 h-8 rounded-full`}
                        >
                          {format(date, "d")}
                        </span>
                      </div>
                      <div className="flex flex-col gap-1">
                        <EventLabel
                          events={events}
                          isEventOnDate={isEventOnDate}
                          handleShowSidebar={stateShowSidebar.handleShow}
                          normalizeDate={normalizeDate}
                          date={date}
                          handleDragStart={(index) =>
                            handleDragStart(index, events, setDraggedEvent)
                          }
                        />
                      </div>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <Sidebar
          isShow={stateShowSidebar.isShow}
          type="form"
          slide
          position={"right-0"}
          submitType={submitType}
          dataDefault={dataEvent}
          title={submitType === "add" ? "Add Event" : "Update Event"}
          inputForm={inputForm}
          handleShow={stateShowSidebar.handleShow}
          handleOpenModal={stateShowModal.handleShow}
          handleService={(datas, extraOptionsForm) =>
            handleService(datas, { setUpdatedEvents, ...extraOptionsForm })
          }
        />

        <ModalLayout
          isModalOpen={stateShowModal?.isShow}
          submitType={submitType}
          handleCloseModal={stateShowModal?.handleShow}
        >
          <ConfirmDelete
            onConfirm={handleServiceWithOnClick}
            handleCloseModal={stateShowModal.handleShow}
            dataRow={dataEvent}
          />
        </ModalLayout>
      </div>
    </div>
  );
};

export default Calendar;
