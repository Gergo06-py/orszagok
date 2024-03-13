/*
 * File: App.js
 * Author: Borbély Gergő Árpád
 * Copyright: 2024, Borbély Gergő Árpád
 * Group: Szoft II/2/N
 * Date: 2024-03-13
 * Github: https://github.com/Gergo06-py
 * Licenc: GNU GPL
 */

import { useState } from "react";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";

export default function App() {
	const host = "http://localhost:3000/";
	const endpoint = "orszagok";
	const url = host + endpoint;
	const [countries, setCountries] = useState([]);

	const getCountries = () => {
		fetch(url)
			.then((response) => response.json())
			.then((result) => {
				setCountries(result);
			});
	};

	return (
		<View style={styles.container}>
			<View style={styles.titleContainer}>
				<Text style={styles.title}>Országok</Text>
			</View>
			<View style={styles.fetchContainer}>
				<Pressable style={styles.fetchButton} onPress={getCountries}>
					<Text style={styles.buttonLabel}>Lekérés</Text>
				</Pressable>
				<FlatList
					style={styles.list}
					data={countries}
					renderItem={({ item }) => (
						<View style={styles.dataContainer}>
							<table>
								<thead>
									<tr>
										<th style={styles.dataLabel}>Név</th>
										<th style={styles.dataLabel}>Terület</th>
										<th style={styles.dataLabel}>Népesség</th>
										<th style={styles.dataLabel}>Főváros</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td style={styles.tableCell}>
											<Text style={styles.dataLabel}>{item.nev}</Text>
										</td>
										<td style={styles.tableCell}>
											<Text style={styles.dataLabel}>{item.terulet}</Text>
										</td>
										<td style={styles.tableCell}>
											<Text style={styles.dataLabel}>{item.nepesseg}</Text>
										</td>
										<td style={styles.tableCell}>
											<Text style={styles.dataLabel}>{item.fovaros}</Text>
										</td>
									</tr>
								</tbody>
							</table>
						</View>
					)}
				/>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "skyblue",
		alignItems: "center",
		justifyContent: "space-evenly",
		fontFamily: "Arial, sans-serif",
	},
	titleContainer: {
		flex: 0.4,
		justifyContent: "center",
	},
	title: {
		fontSize: 30,
	},
	fetchContainer: {
		flex: 1,
		alignItems: "center",
		justifyContent: "start",
	},
	fetchButton: {
		backgroundColor: "lightblue",
		paddingVertical: 10,
		paddingHorizontal: 15,
		borderRadius: 6,
		marginBottom: 20,
		boxShadow: "0 3px 12px #3338",
	},
	list: {
		borderColor: "#6666",
		borderTopWidth: 1,
		borderBottomWidth: 1,
		paddingTop: 10,
	},
	dataContainer: {
		border: "1px solid #6666",
		backgroundColor: "#fffa",
		boxShadow: "0 3px 12px #3338",
		borderRadius: 10,
		paddingVertical: 4,
		paddingHorizontal: 8,
		marginBottom: 10,
	},
	tableCell: {
		width: "25%",
	},
	dataLabel: {
		textAlign: "left",
	},
});
