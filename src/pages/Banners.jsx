import {
  Breadcrumbs,
  Container,
  HeaderBanner,
  EventCard,
  Button,
  ModalLayout,
  FormTemplate,
  Spinner,
} from "@/components";
import {
  dayNames,
  inputPostBanner,
  monthNames,
} from "@/pattern/calendar/calendarPattern";
import { useCalendar, useBanner, useBannerDragDrop } from "@/hooks/index";
import Drawer from "@/components/atoms/Drawer";

const Banners = () => {
  const {
    currentDate,
    calendar,
    handleNextMonth,
    handlePrevMonth,
    handleNextYear,
    handlePrevYear,
    handleToday,
  } = useCalendar();

  const {
    getBannerForDate,
    getBanner,
    onSubmit,
    modalIsOpen,
    handleCloseModal,
    handleOpenModal,
    modalType,
    selectedBannerId,
    getBannerById,
    handleOpenEditModal,
    editSubmit,
    deleteSubmit,
    loading,
  } = useBanner();

  const {
    // handleDragEnd,
    // handleDragLeave,
    // handleDragOver,
    // handleDragStart,
    // handleDrop,
    // handleSaveChanges,
    saveChanges,
    dropHandlers,
    dragHandlers,
    movedBanners,
  } = useBannerDragDrop(getBanner);

  const selectedBanner = selectedBannerId
    ? getBannerById(selectedBannerId)
    : null;
  if (loading)
    return (
      <Container>
        <Spinner />
      </Container>
    );
  return (
    <>
      <Container>
        <div className="flex justify-between items-center w-full">
          <Breadcrumbs />
          <Button
            onClick={() => handleOpenModal("add")}
            className="bg-blue-800 text-white"
          >
            Add Event
          </Button>
        </div>
        <div className="w-full flex-col bg-white shadow-2xl rounded-md flex justify-between items-center">
          <HeaderBanner
            currentDate={currentDate.getFullYear()}
            handleNextMonth={handleNextMonth}
            handleNextYear={handleNextYear}
            handlePrevMonth={handlePrevMonth}
            handlePrevYear={handlePrevYear}
            handleToday={handleToday}
            monthNames={monthNames[currentDate.getMonth()]}
            movedBanners={movedBanners}
            handleSaveChanges={saveChanges}
          />

          <table className="w-full border-y-2 bg-white">
            <thead>
              <tr className="divide-x-2">
                {dayNames.map((day) => (
                  <th className="border-y-2 py-2" key={day}>
                    {day}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y-2">
              {calendar.map((week, weekIndex) => (
                <tr key={weekIndex} className="divide-x-2">
                  {week.map((day, dayIndex) => {
                    const currentDay = new Date(day.date);
                    const bannersOnThisDay = getBannerForDate(
                      currentDay,
                      movedBanners
                    );

                    return (
                      <td
                        key={dayIndex}
                        className={`h-32 w-32 text-end align-text-top relative
                      ${
                        day.isToday ? "bg-blue-100 font-bold text-blue-600" : ""
                      } 
                      ${!day.isCurrentMonth ? "text-gray-300" : ""}
                      ${day.isCurrentMonth ? "hover:bg-gray-100" : ""}
                      transition-colors duration-200
                      `}
                        onDragOver={dropHandlers.onDragOver}
                        onDragLeave={dropHandlers.onDragLeave}
                        onDrop={(e) => dropHandlers.onDrop(e, currentDay)}
                      >
                        <p className="flex justify-end p-2">{day.day}</p>

                        {/* Tampilkan banner yang ada pada hari ini */}
                        {bannersOnThisDay.length >= 0 && (
                          <>
                            <EventCard
                              // handleEditClick={(bannerItem) =>
                              //   handleOpenEditModal(bannerItem.id_banner)
                              // }
                              // handleDeleteClick={(bannerItem) =>
                              //   deleteSubmit(bannerItem.id_banner)
                              // }
                              bannersOnThisDay={bannersOnThisDay}
                              handleDragEnd={dragHandlers.onDragEnd}
                              handleDragStart={(e, bannerItem) =>
                                dragHandlers.onDragStart(e, bannerItem)
                              }
                              handleOnClick={(bannerItem) =>
                                handleOpenEditModal(bannerItem.id_banner)
                              }
                            />
                          </>
                        )}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Container>
      <ModalLayout
        isModalOpen={modalIsOpen}
        onClick={handleCloseModal}
        className="items-center justify-center"
      >
        {modalType === "edit" ? (
          <Drawer
            handleCloseModal={handleCloseModal}
            pattern={inputPostBanner}
            defaultValues={selectedBanner}
            isOpen={modalIsOpen}
            onSubmit={editSubmit}
            deleteSubmit={deleteSubmit}
          />
        ) : (
          <FormTemplate
            showCloseButton={true}
            onClose={handleCloseModal}
            onSubmit={onSubmit}
            title={"Add Banner"}
            description={"Insert banner detail to add data"}
            className={`bg-white`}
            pattern={inputPostBanner}
          />
        )}
      </ModalLayout>
    </>
  );
};

export default Banners;
