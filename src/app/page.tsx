"use client";

import AppContainer from "./components/appContainer/appContainer";
import { AppStateProvider } from "./components/appStateProvider/appStateProvider";
import Button from "./components/button/button";
import { ButtonType } from "./enums/ButtonType";
import Checkbox from "./components/checkbox/checkbox";
import { CheckboxType } from "./enums/CheckboxType";
import MarchingSquares from "./components/marchingSquares/marchingSquares";
import MenuContainer from "./components/menuContainer/menuContainer";
import TextInput from "./components/textInput/textInput";
import { TextInputType } from "./enums/TextInputType";

export default function Page(): JSX.Element {
  // TODO - Add loading spinner (for smaller field resolutions which take longer to render).
  //        Add color picker (field, isolines, etc).
  return (
    <AppStateProvider>
      <AppContainer>
        <MenuContainer>
          <TextInput
            type={TextInputType.FIELD_RES}
            label="Field Resolution"
            title="Determines the resolution of the field (in pixels)."
            placeholder="40"
            min={1}
            max={3}
            size={2} />

          <Checkbox
            type={CheckboxType.IS_SHOW_FIELD}
            label="Show Field:"
            title="Toggles the drawing of the field." />
            
          <Checkbox
            type={CheckboxType.IS_SHOW_ISOLINES}
            label="Show Isolines:"
            title="Toggles the drawing of the isolines (contour lines)." />

          <Checkbox
            type={CheckboxType.IS_ROUNDING_FIELD}
            label="Round Field Values:"
            title="Toggles the rounding of the field values, changing the intensity of the circles' colors (binary on/off representation)." />

          <Button
            type={ButtonType.GENERATE_NEW_FIELD}
            label="Generate New Field"
            title="Click to generate a new randomized field." />
        </MenuContainer>
        <MarchingSquares />
      </AppContainer>
    </AppStateProvider>
  );
}
