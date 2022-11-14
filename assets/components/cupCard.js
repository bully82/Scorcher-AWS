import * as React from "react";
import { Avatar, Card, IconButton } from "react-native-paper";

const CupCard = () => (
  <Card.Title
    title="European Cup"
    subtitle="20 random fixtures from the weeks european cup competitions"
    left={(props) => <Avatar.Icon {...props} icon="trophy" />}
    right={(props) => (
      <IconButton {...props} icon="play-circle-outline" onPress={() => {}} />
    )}
  />
);

export default CupCard;
