import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../components/Home";
import FastExam from "../components/FastExam";
import LevenExam from "../components/LevenExam";
import Results from "../components/Results";
import MatterExam from "../components/MatterExam";

const Stack = createNativeStackNavigator();

const MainStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: "UNI- Ciencias",
            headerTintColor: "#fff",
            headerStyle: { backgroundColor: "#FF5029" },
            animation: "slide_from_right",
          }}
        />
        <Stack.Screen
          name="FastExam"
          component={FastExam}
          options={{
            title: "Examen Rapido",
            headerTintColor: "#fff",
            headerStyle: { backgroundColor: "#FF5029" },
          }}
        />
        <Stack.Screen
          name="MatterExam"
          component={MatterExam}
          options={{
            title: "Examen por Materia",
            headerTintColor: "#fff",
            headerStyle: { backgroundColor: "#FF5029" },
          }}
        />
        <Stack.Screen
          name="LevenExam"
          component={LevenExam}
          options={{
            title: "Examen por Nivel",
            headerTintColor: "#fff",
            headerStyle: { backgroundColor: "#FF5029" },
          }}
        />
        <Stack.Screen
          name="Results"
          component={Results}
          options={{
            title: "Resultados",
            headerTintColor: "#fff",
            headerStyle: { backgroundColor: "#FF5029" },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainStack;
