import { SingleSwatchWrapper } from "../components";

function SwatchWrapper({ activeData, swatchData, handleSwatchClick }) {
  const handleSwatchClicked = (item) => {
    handleSwatchClick(item);
  };
  return (
    <div className="h-fit absolute z-20 w-full bottom-0 flex justify-center gap-8 mb-2  lg:w-fit lg:inset-y-[40%] lg:right-20 lg:flex-col">
      {swatchData.map((dataObj) => (
        <SingleSwatchWrapper
          key={dataObj.id}
          item={dataObj}
          handleClick={handleSwatchClicked}
          activeId={activeData.id}
        />
      ))}
    </div>
  );
}

export default SwatchWrapper;
