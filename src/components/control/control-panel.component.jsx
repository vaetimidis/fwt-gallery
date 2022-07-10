import React from 'react';

//* componenets
import Range from './range.component';

//* styles
import { ControlPanelStyle } from '#/styles/components/control/control-panel.style';

//* custom hook
import { useControl } from '#/hooks/store/useControl';

// Control panel
//* ------------------------------------------------------------------------------------------ *//
const ControlPanel = () => {
  const { range, handleOnChangeFrom, handleOnChangeBefore } = useControl();

  return (
    <ControlPanelStyle>
      <Range range={range} handleBefore={handleOnChangeBefore} handleFrom={handleOnChangeFrom} />
      <Range range={range} handleBefore={handleOnChangeBefore} handleFrom={handleOnChangeFrom} />
      <Range range={range} handleBefore={handleOnChangeBefore} handleFrom={handleOnChangeFrom} />
      <Range range={range} handleBefore={handleOnChangeBefore} handleFrom={handleOnChangeFrom} />
    </ControlPanelStyle>
  );
};

export default ControlPanel;
