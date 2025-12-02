import { useEffect } from "react";
import { HeaderContent } from "../../components/molecules";
import { Table } from "../../components/organism";
import { useData, useDebauncedEffect, useGlobalHook } from "../../hook";
import { configTableSubscribers, inputEditSubscribers } from "../../pattern";
import {
  getSubscribersService,
  handleDeleteSubscribers,
  handleEditSubscribers,
} from "../../service";

const SubscribersPage = () => {
  const {
    stateShowModal,
    setSearchQuery,
    dataRow,
    submitType,
    isLoading,
    accessToken,
    setIsLoading,
    searchQuery,
    refreshData,
    setRefreshData,
    handleCloseModal,
  } = useGlobalHook();

  const { datasSubscribers, setDatasSubscribers } = useData();
  const extraOptions = { accessToken, setRefreshData, handleCloseModal };

  useDebauncedEffect({
    fn: () => {
      Promise.all([
        getSubscribersService(accessToken, {
          searchQuery,
          setDatasSubscribers,
          setRefreshData,
        }),
      ]).finally(() => setIsLoading(false));
    },
    deps: [searchQuery, refreshData],
    condition: Object.keys(searchQuery).length > 0,
  });
  return (
    <>
      <HeaderContent
        title={"Subscribers"}
        handleOpen={stateShowModal.handleShow}
      />

      <Table
        datasTable={datasSubscribers}
        dataRow={dataRow}
        configTable={configTableSubscribers}
        stateShowModal={stateShowModal}
        title={"Subscribers"}
        isLoading={isLoading}
        // handleSearch={handleSearch(setSearchQuery)}
        inputForm={inputEditSubscribers(dataRow)}
        submitType={submitType}
        handleService={
          submitType === "edit"
            ? handleEditSubscribers(extraOptions, dataRow)
            : submitType === "delete"
            ? handleDeleteSubscribers(extraOptions)
            : null
        }
        // handleService={
        //   submitType === "add"
        //     ? handleAddRole(extraOptions)
        //     : submitType === "edit"
        //     ? handleEditRole(extraOptions, dataRow)
        //     : submitType === "delete"
        //     ? handleDeleteRole(extraOptions)
        //     : null
        // }
      />
    </>
  );
};

export default SubscribersPage;
