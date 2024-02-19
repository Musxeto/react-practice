import React,{useState} from 'react'
import {ChromePicker} from 'react-color'

function ColorPicker() {
    const [selectedColor, setSelectedColour] = useState('#ffffff');

    const handleChangeComplete = (color) => {
        setSelectedColour(color.hex);
    }

  return (
    <div>
      <h2>Colour Picker</h2>
      <ChromePicker color={selectedColor} onChangeComplete={handleChangeComplete} />
      <div
        style = {{
          width:'100%',
          height: '300px',
          backgroundColor: selectedColor,
          marginTop: '20px',
        }}
      >Selected Colour: {selectedColor}</div>
    </div>
  )
}

export default ColorPicker