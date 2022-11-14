import * as React from "react";
import { Avatar, Card, IconButton } from "react-native-paper";

const InternationalCard = () => (
  <Card.Title
    title="International"
    subtitle="X random international fixtures"
    left={(props) => <Avatar.Icon {...props} icon="globe-model" />}
    right={(props) => (
      <IconButton {...props} icon="play-circle-outline" onPress={() => {}} />
    )}
  />
);

export default InternationalCard;
