import { Card } from "..";
import IconActions from "../molecules/IconActions";

const AboutContent = ({ meta, bodyId, bodyEn, deleteClick, editClick }) => {
  return (
    <>
      <div className="w-full bg-white p-4 flex rounded-sm gap-4 flex-col shadow-lg">
        <div className="w-full justify-between flex">
          <h1 className="text-lg">
            <span className="font-semibold">Meta: </span>
            {meta}
          </h1>
          <IconActions deleteClick={deleteClick} editClick={editClick} />
        </div>
        <div className="w-full flex gap-2">
          <Card className="flex-1 p-2 shadow-none space-y-2 border-2 overflow-x-hidden">
            <p className="font-bold text-xl">Description ID</p>
            <div dangerouslySetInnerHTML={{ __html: bodyId }} />
          </Card>
          <Card className="flex-1 shadow-none p-2 space-y-2 border-2 overflow-x-hidden">
            <p className="font-bold text-xl">Description ENG</p>
            <div dangerouslySetInnerHTML={{ __html: bodyEn }} />
          </Card>
        </div>
      </div>
    </>
  );
};

export default AboutContent;
