export default function User({user, onClick}) {
    return ( <li> {user.name} {user.age} <button onClick={onClick}>X</button></li> );
}