import React from 'react';

//* componenets
import Range from './range.component';
import Select from './select.component';

//* styles
import { ControlPanelStyle } from '#/styles/components/control/control-panel.style';

//* custom hook
import { useControl } from '#/hooks/store/useControl';

// Control panel
//* ------------------------------------------------------------------------------------------ *//
const ControlPanel = () => {
  const { range, authors, locations, handleOnChangeFrom, handleOnChangeBefore } = useControl();

  console.log(locations);
  return (
    <ControlPanelStyle>
      <Range range={range} handleBefore={handleOnChangeBefore} handleFrom={handleOnChangeFrom} />
      <Select
        arr={authors.map((x) => {
          return { id: x.id, value: x.name };
        })}
        title="authors"
      />
      <Select
        arr={locations.map((x) => {
          return { id: x.id, value: x.location };
        })}
        title="locations"
      />
      <Range range={range} handleBefore={handleOnChangeBefore} handleFrom={handleOnChangeFrom} />
    </ControlPanelStyle>
  );
};

export default ControlPanel;
