import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { PhotoshopPicker, ChromePicker } from "react-color";
import { IoIosColorPalette } from "react-icons/io";
import EditorContext from "../../context/EditorContext";
import ToolBarButton from "../../Header/ToolBar/ToolBarButton/ToolBarButton";
import StyledColorPicker from "./StyledColorPicker";
import { useOnClickOutside } from "../../hooks/useOnClickOutside";

const pickerWidth = 513;

const ColorPicker = () => {
  const { pickedColor, indexOfSelectedColor, replaceColor } = useContext(
    EditorContext
  );
  const [isColorPickerVisible, setColorPickerVisile] = useState(false);
  const [localColor, setLocalColor] = useState(pickedColor);
  const [pickerLocation, setPickerLocation] = useState({
    top: 0,
    left: 0,
  });
  const ref = useRef<any>();

  const onAccept = () => {
    setColorPickerVisile(false);
    replaceColor(indexOfSelectedColor, localColor);
  };

  const onChange = ({ hex }) => {
    setLocalColor(hex);
  };

  const onMobileChange = ({ hex }) => replaceColor(indexOfSelectedColor, hex);

  const onButtonClick = ({ clientX, clientY }) => {
    setPickerLocation({
      top: clientY - 40,
      left: isWindowWiderThanValue(clientX + pickerWidth)
        ? clientX
        : window.innerWidth - pickerWidth,
    });
    setColorPickerVisile(true);
  };

  const isWindowWiderThanValue = useCallback(
    (value: number) => window.innerWidth > value,
    []
  );

  const onResize = () => {
    if (!isWindowWiderThanValue(pickerLocation.left + pickerWidth)) {
      setPickerLocation({
        ...pickerLocation,
        left: window.innerWidth - pickerWidth,
      });
    }
  };

  useEffect(() => {
    if (pickedColor !== localColor) setLocalColor(pickedColor);
  }, [pickedColor]);

  useEffect(() => {
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);
  useOnClickOutside(ref, () => setColorPickerVisile(!isColorPickerVisible));

  return (
    <>
      <ToolBarButton
        icon={<IoIosColorPalette />}
        name="Color Pallete"
        onClick={onButtonClick}
      />
      {isColorPickerVisible && (
        <StyledColorPicker.Popover>
          <StyledColorPicker.Cover ref={ref} {...pickerLocation}>
            <ChromePicker color={localColor} onChange={onMobileChange} />
            <PhotoshopPicker
              color={localColor}
              onChange={onChange}
              onCancel={() => setColorPickerVisile(!isColorPickerVisible)}
              onAccept={onAccept}
            />
          </StyledColorPicker.Cover>
        </StyledColorPicker.Popover>
      )}
    </>
  );
};

export default ColorPicker;
