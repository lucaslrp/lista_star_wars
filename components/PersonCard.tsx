import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { globalStyles } from "../styles/global";
import { Person } from "../types/Person";

const PersonCard: React.FC<Person> = ({
  person: { name, height, mass, hair_color, birth_year },
}) => {
  return (
    <View style={globalStyles.container}>
      <View style={styles.card}>
        <Text style={styles.name}>{name}</Text>
        <View style={styles.detailsContainer}>
          <View style={styles.details}>
            <Text style={globalStyles.text}>Altura: {height}cm</Text>
            <Text style={globalStyles.text}>Peso: {mass}kg</Text>
          </View>
          <View>
            <Text style={globalStyles.text}>Cor do cabelo: {hair_color}</Text>
            <Text style={globalStyles.text}>Ano de nascimento: {birth_year}</Text>
          </View>
        </View>
      </View>
      <View style={styles.footerBtn}>
        <Text style={styles.footerText}>Ver Filmes</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: "100%",
    backgroundColor: "#282727",
    padding: 10,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    alignSelf: "center",
  },
  text: {
    color: "white",
  },
  name: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
  },
  detailsContainer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-start",
  },
  details: {
    width: "50%",
    paddingHorizontal: 5,
  },
  footerBtn: {
    flex: 1,
    backgroundColor: "#e8e8e8",
    width: "100%",
    margin: 0,
    padding: 0,
    marginBottom: 15,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
  footerText: {
    textAlign: "center",
    padding: 5,
  },
});

export default PersonCard;
