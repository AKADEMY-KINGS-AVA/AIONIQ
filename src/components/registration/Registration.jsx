import './Registration.css'
''

export default function Registration() {
    function handleClick() {
        console.log('Button clicked')
    }
    return (
        <section className="Registration">
            <h2 className="Registration-heading">AIONIQ</h2>
            <input className="Username-control" type="text" placeholder="Username" />
            <input className="Password-control" type="password" placeholder="Password" />
            <button className="Submit-control" type="submit" >Вход</button>
        </section>
    )
}