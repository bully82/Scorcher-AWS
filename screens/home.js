//import { View, Text } from "react-native";
import * as React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import LeagueCard from "../assets/components/leagueCard";
import CupCard from "../assets/components/cupCard";
import InternationalCard from "../assets/components/internationalCard";
import AppBar from "../assets/components/appbar";

function Home() {
  return (
    <SafeAreaView>
      <AppBar />
      <LeagueCard />
      <CupCard />
      <InternationalCard />
    </SafeAreaView>
  );
}

export default Home;
