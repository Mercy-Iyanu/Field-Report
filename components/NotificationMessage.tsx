import React from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';

type NotificationMessageProps = {
  message: string;
  isVisible: boolean;
  duration?: number;
};

export default function NotificationMessage({ message, isVisible, duration = 3000 }: NotificationMessageProps) {
  const [visible, setVisible] = React.useState(isVisible);
  const opacity = React.useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    if (isVisible) {
      setVisible(true);
      Animated.timing(opacity, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start(() => {
        setTimeout(() => {
          Animated.timing(opacity, {
            toValue: 0,
            duration: 300,
            useNativeDriver: true,
          }).start(() => {
            setVisible(false);
          });
        }, duration);
      });
    }
  }, [isVisible]);

  if (!visible) return null;

  return (
    <Animated.View style={[styles.container, { opacity }]}>
      <Text style={styles.message}>{message}</Text>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 50,
    left: '10%',
    right: '10%',
    padding: 15,
    backgroundColor: '#4CAF50',
    borderRadius: 8,
    zIndex: 1000,
    alignItems: 'center',
  },
  message: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});