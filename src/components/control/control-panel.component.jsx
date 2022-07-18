import React from 'react';

//* componenets
import Range from './range.component';
import Select from './select.component';
import Search from './search.component';

//* styles
import { ControlPanelStyle } from '#/styles/components/control/control-panel.style';

//* custom hook
import { useControl } from '#/hooks/store/useControl';

// Control panel
//* ------------------------------------------------------------------------------------------ *//
const ControlPanel = () => {
  const {
    q,
    range,
    authors,
    locations,
    author,
    location,
    handleOnChangeRange,
    handleOnChangeLocation,
    handleOnChangeAuthor,
    handleOnChangeSearch
  } = useControl();

  return (
    <ControlPanelStyle>
      <Search callback={handleOnChangeSearch} value={q} />
      <Select
        arr={authors.map((x) => {
          return { id: x.id, value: x.name };
        })}
        title="authors"
        value={author ? author.value : null}
        callback={handleOnChangeAuthor}
      />
      <Select
        arr={locations.map((x) => {
          return { id: x.id, value: x.location };
        })}
        title="locations"
        value={location ? location.value : null}
        callback={handleOnChangeLocation}
      />
      <Range range={range} callback={handleOnChangeRange} />
    </ControlPanelStyle>
  );
};

export default ControlPanel;
