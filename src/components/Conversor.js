import React, { Component } from 'react';
import "./Conversor.css";

export default class Conversor extends Component {

    constructor(props) {
        super(props);

        this.state = {
            moedaA_valor: "",
            moedaB_valor: 0,
        }

        this.Converter = this.Converter.bind(this);
    }

    Converter() {
        let de_para = `${this.props.moedaA}_${this.props.moedaB}`;
        let url = `https://free.currencyconverterapi.com/api/v5/convert?q=${de_para}&compact=ultra&apiKey=821d2f2cd7ba9c15310b`

        fetch(url)
            .then(res => {
                return res.json()
            })
            .then(json => {
                let cotacao = json[de_para];
                let moedaB_valor = (parseFloat(this.state.moedaA_valor) * cotacao).toFixed(2)
                this.setState({ moedaB_valor })
            })

    }

    render() {
        return (
            <div className="conversor">
                <h2>{this.props.moedaA} para {this.props.moedaB}</h2>
                <input type="text" onChange={(event) => { this.setState({ moedaA_valor: event.target.value }) }} />
                <input type="button" value="Converter" onClick={this.Converter} />
                <h2>{this.state.moedaB_valor}</h2>
            </div>
        )
    }
}