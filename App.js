
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      pizza: 0,
      pizzas: [
        { key: 1, nome: 'Strogonoff', valor: 59.30 },
        { key: 2, nome: 'Pizza', valor: 58.00 },
        { key: 3, nome: 'Espetinho', valor: 8.50 },
        { key: 4, nome: 'Feijoada', valor: 25.00 },
      ]
    };

  }

  render() {

    let pizzaItem = this.state.pizzas.map((value, key) => {
      return <Picker.Item key={key} value={key} label={value.nome} />
    })

    return (
      <View style={styles.container} >
        <Text style={styles.logo}>Menu Pizza</Text>
        <Picker
          selectedValue={this.state.pizza}
          onValueChange={(itemValue, itemIndex) => this.setState({ pizza: itemValue })}
        >
          {pizzaItem}
        </Picker>

        <Text style={styles.pizzas}>Você escolhe: {this.state.pizzas[this.state.pizza].nome}</Text>
        <Text style={styles.pizzas}>R$: {this.state.pizzas[this.state.pizza].valor.toFixed(2)} </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20
  },
  logo: {
    textAlign: 'center',
    fontSize: 28,
    fontWeight: 'bold'
  },
  pizzas: {
    marginTop: 15,
    fontSize: 28,
    textAlign: 'center',
    fontWeight: 'bold'
  }
});