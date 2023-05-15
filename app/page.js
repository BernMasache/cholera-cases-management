"use client"
import ProgramStore from "@/services/store/program.store";
import { useEffect } from "react";
const programStore = new ProgramStore();
export default function Home() {
  const program = () => {
    programStore.getProgram().then((res) => {
      console.log(res);
    });
  };
  useEffect(() => {
    program();
  });
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24"></main>
  );
}
