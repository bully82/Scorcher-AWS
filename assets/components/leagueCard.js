import * as React from "react";
import { Avatar, Card, IconButton } from "react-native-paper";

const LeagueCard = () => (
  <Card.Title
    title="League"
    subtitle="20 random weekend fixtures from the top 5 leagues"
    left={(props) => <Avatar.Icon {...props} icon="format-list-numbered" />}
    right={(props) => (
      <IconButton {...props} icon="play-circle-outline" onPress={() => {}} />
    )}
  />
);

export default LeagueCard;
