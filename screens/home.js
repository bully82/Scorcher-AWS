//import { View, Text } from "react-native";
import * as React from "react";
import LeagueCard from "../assets/components/leagueCard";
import { SafeAreaView } from "react-native-safe-area-context";
import CupCard from "../assets/components/cupCard";
import InternationalCard from "../assets/components/internationalCard";

function Home() {
  return (
    <SafeAreaView>
      <LeagueCard />
      <CupCard />
      <InternationalCard />
    </SafeAreaView>
  );
}

export default Home;
