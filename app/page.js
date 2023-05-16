"use client"
import { INITIAL_STATE, programReducer } from "@/dataReducers/programReducer";
import ProgramStore from "@/services/store/program.store";
import { useEffect, useReducer } from "react";

const programStore = new ProgramStore();

export default function Home() {

  const [state, dispatch] = useReducer(programReducer, INITIAL_STATE)
  const program = (e) => {
    e.preventDefault()
    dispatch({ type: "FETCH_START" })
    programStore.getProgram().then((data) => {
      dispatch({ type: "FETCH_SUCCESS", payload: data })
    }).catch(e => {
      dispatch({ type: "FETCH_ERROR" })
    });

    console.log(state);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <button onClick={program} className="bg-green-700 text-white p-1 rounded hover:bg-green-500">Fetch</button>
    </main>
  );
}
