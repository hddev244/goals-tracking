import { ThemedView } from "../ThemedView";

import React, { useMemo, useState } from "react";
import { Text, Platform } from "react-native";
import { Button } from "../common/manual-platform/Button/Button";
import DatePicker from "react-native-date-picker";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import RadioGroup, {RadioButtonProps} from 'react-native-radio-buttons-group';


export default function PickTime() {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);

  const onChange = (event: any, selectedDate: Date | undefined) => {
    // Với Android, sau khi chọn sẽ tự đóng picker
  };

  return (
    <ThemedView style={{ alignItems: "center", justifyContent: "center" }}>
      <Text style={{ fontSize: 18, marginBottom: 20 }}>
        Thời gian đã chọn: {date.toLocaleTimeString()}
      </Text>
      <Button title="Open" onPress={() => setOpen(true)} />
      {/* <BouncyCheckbox
        size={25}
        fillColor="red"
        unFillColor="#FFFFFF"
        text="Custom Checkbox"
        iconStyle={{ borderColor: "red" }}
        style={{ borderColor: "red", borderWidth: 1 }}
        innerIconStyle={{ borderWidth: 2 }}
        textStyle={{ fontFamily: "JosefinSans-Regular" }}
        onPress={(isChecked: boolean) => {
          console.log(isChecked);
        }}
      /> */}


      <DatePicker
        modal
        open={open}
        date={date}
        onConfirm={(date) => {
          setOpen(false);
          setDate(date);
        }}
        onCancel={() => {
          setOpen(false);
        }}
      />
    </ThemedView>
  );
}
