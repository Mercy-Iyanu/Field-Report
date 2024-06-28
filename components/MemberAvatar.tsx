import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

interface MemberAvatarProps {
  avatars: string[];
}

const MemberAvatar = ({ avatars }: MemberAvatarProps) => {
  return (
    <View style={styles.membersContainer}>
      {avatars.map((avatar, index) => (
        <Image key={index} source={{ uri: avatar }} style={styles.memberAvatar} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  memberAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: -24,
    borderColor: '#000',
  },
  membersContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
});

export default MemberAvatar;
