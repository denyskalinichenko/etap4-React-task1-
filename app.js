class App extends React.Component {

    state = {
        text: "",
        number: 8
    }

    //metoda
    handleClick = () => {
        const letter = "a"
        this.setState({
            text: this.state.text + letter
        })
    }


    render() {
        return ( <
            >
            <
            button onClick = {
                this.handleClick
            } > Dodaj "A" < /button> <
            h1 > {
                this.state.text
            } < /h1> <
            />
        )
    }
}

ReactDOM.render( < App / > , document.getElementById("root"))