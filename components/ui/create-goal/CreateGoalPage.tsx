import React, { useEffect } from "react";
import { View, Text, StyleSheet, useWindowDimensions } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import AddNewGoalModal from "@/components/ui/create-goal/AddNewGoal";
import Steps from "@/components/ui/Step/Steps";
import Step from "@/components/ui/Step/Step";
import ChosseGoalType from "@/components/ui/create-goal/ChosseGoalType";
import { RootState } from '@/stores/store';
import { setActiveStep } from "@/stores/slices/goalCreateSlice";
import { TASKS_TYPE } from "@/data/initdata";
import { RadioButtonProps } from "react-native-radio-buttons-group";

const Page = () => {
 const { activeStep, selectedId } = useSelector(
    (state: RootState) => state.goalCreate
  );


  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <Steps
        completedButtonTitle="Hoàn thành"
        onCompletedButtonPress={() => {
          console.log("Hoàn thành");
        }}
        onActiveStepChange={(step) => {
          console.log("step", step);
          dispatch(setActiveStep(step));
        }}
        activeStep={activeStep}
        size="medium"
        bgColorActive="#FF6347"
        textColorActive="#fff"
      >
        <Step>
          <ChosseGoalType />
        </Step>
        <Step>
          <AddNewGoalModal />
        </Step>
        <Step>
          <Text>Step 3</Text>
        </Step>
      </Steps>
    </View>
  );
};

export default Page;

const styles = StyleSheet.create({
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "midnightblue",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    width: "100%",
    height: "100%",
    gap: 10,
    backgroundColor: "white",
    borderRadius: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  modalTextTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  container: {
    flex: 1,
    flexDirection: "column",
    display: "flex",
    width: "100%",
    height: "100%",
  },
  innerContainer: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
    width: "100%",
  },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: 300,
  },
  button: {
    padding: 15,
    alignItems: "center",
    flex: 1,
  },
  text: {
    backgroundColor: "transparent",
    fontSize: 15,
    textAlign: "center",
  },
  goalItem: {
    display: "flex",
    flexDirection: "row",
    columnGap: 10,
    padding: 16,
    alignItems: "center",
  },
  groupContainer: {
    width: "32%",
    backgroundColor: "rgba(253, 253, 253,  0.85)",
  },
  goalItemContainer: {
    backgroundColor: "white",
    width: "100%",
  },
  buttonBox: {
    padding: 14,
    alignItems: "center",
    backgroundColor: "rgba(253, 253, 253,  0.85)",
  },
});
