import React from 'react';

class App extends React.Component {
    handleSubmit = event => {
        event.preventDefault();

        const firstName = event.target.firstName.value;
        const lastName = event.target.lastName.value
        console.log(firstName, lastName);
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>
                        Name:
                        <input name="firstName" type="text"/>
                    </label>
                </div>
                <div>
                    <label>
                        Surname:
                        <input name="lastName" type="text"/>
                    </label>
                </div>
                <button type="submit">Submit</button>
            </form>
        );
    };
}

export default App;