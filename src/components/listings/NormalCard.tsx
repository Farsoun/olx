import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Ad } from '../../types/ad';

interface Props {
  	ad: Ad;
}

const NormalCard: React.FC<Props> = ({ ad }) => {
	return (
		<View style={styles.container}>
		<View>
			<Image source={{ uri: ad.image }} style={styles.image} />
			<TouchableOpacity style={styles.favorite}>
			<Ionicons name="heart-outline" size={20} color="#fff" />
			</TouchableOpacity>
		</View>

		<View style={styles.content}>
			<Text style={styles.price}>USD {ad.price.toLocaleString()}</Text>

			<Text numberOfLines={1}>{ad.title}</Text>

			<View style={styles.row}>
			<Text style={styles.meta}>{ad.year}</Text>
			<Text style={styles.meta}>{ad.mileage}</Text>
			<Text style={styles.meta}>{ad.fuel}</Text>
			</View>

			<Text style={styles.location}>{ad.location}</Text>

			<View style={styles.actions}>
			<TouchableOpacity style={[styles.button, styles.leftButton]}>
				<Text>Chat</Text>
			</TouchableOpacity>

			<TouchableOpacity style={[styles.button, styles.rightButton]}>
				<Text>Call</Text>
			</TouchableOpacity>
			</View>
		</View>
		</View>
	);
};

export default NormalCard;

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#fff',
		borderRadius: 7,
		marginBottom: 16,
		overflow: 'hidden',
		marginHorizontal: 10,
		borderColor: '#dbdbdb',
		borderWidth: 1,
	},

	image: {
		width: '100%',
		height: 200,
	},

	favorite: {
		position: 'absolute',
		top: 10,
		right: 10,
		backgroundColor: 'rgba(0,0,0,0.4)',
		padding: 6,
		borderRadius: 7,
	},

	content: {
		padding: 12,
	},

	price: {
		color: '#E4572E',
		fontWeight: 'bold',
		fontSize: 16,
	},

	row: {
		flexDirection: 'row',
		marginTop: 6,
	},

	meta: {
		fontSize: 12,
		color: '#666',
		marginRight: 10,
	},

	location: {
		color: '#888',
		marginTop: 6,
	},

	actions: {
		flexDirection: 'row',
		marginTop: 10,
	},

	button: {
		flex: 1,
		borderWidth: 1,
		borderColor: '#ddd',
		padding: 10,
		alignItems: 'center',
		borderRadius: 8,
	},

	leftButton: {
		marginRight: 5,
	},

	rightButton: {
		marginLeft: 5,
	},
});