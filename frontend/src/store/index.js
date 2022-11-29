import create from "zustand";

export const useStore = create((set) => ({
    leagueSeq: 0,
    setLeagueSeq() {
        set((state) => ({ leagueSeq: state }))},
}));
export const leagueStore = create(
    ((set) => ({
        leagueSeq1: 0,
        setLeagueSeq: (input) => set({ leagueSeq1: input }),
    }))
);

export const divisionStore = create(
    ((set) => ({
        divisionSeq: 277,
        setDivisionSeq: (input) => set({ divisionSeq: input }),
    }))
);