import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { ListItem, Avatar } from "react-native-elements";

const CustomListItem = ({ id, chatName, enterChat }) => {
  return (
    <>
      <ListItem key={id} bottomDivider>
        <Avatar
          rounded
          source={{
            uri: `https://avatars.dicebear.com/api/human/${Math.random()}.svg`,
          }}
        />
        <ListItem.Content>
          <ListItem.Title style={{ fontWeight: 800 }}>
            {chatName}
          </ListItem.Title>
          <ListItem.Subtitle numberOfLines={1}>wohooooo</ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
    </>
  );
};

export default CustomListItem;

const styles = StyleSheet.create({});
