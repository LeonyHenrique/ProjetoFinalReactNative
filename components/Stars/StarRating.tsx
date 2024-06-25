import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

interface StarRatingProps {
  rating: number;
}

const StarRating: React.FC<StarRatingProps> = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const halfStars = rating % 1 >= 0.5 ? 1 : 0;
  const emptyStars = 5 - fullStars - halfStars;

  return (
    <View style={styles.starContainer}>
      {Array(fullStars)
        .fill(0)
        .map((_, index) => (
          <Image
            key={`full-${index}`}
            source={require('../../assets/full.png')}
            style={styles.starIcon}
          />
        ))}
      {halfStars === 1 && (
        <Image
          key="half"
          source={require('../../assets/half.png')}
          style={styles.starIcon}
        />
      )}
      {Array(emptyStars)
        .fill(0)
        .map((_, index) => (
          <Image
            key={`empty-${index}`}
            source={require('../../assets/empty.png')}
            style={styles.starIcon}
          />
        ))}
    </View>
  );
};

const styles = StyleSheet.create({
  starContainer: {
    flexDirection: 'row',
  },
  starIcon: {
    width: 14,
    height: 14,
    marginRight: 2,
  },
});

export default StarRating;
