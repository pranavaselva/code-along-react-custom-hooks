function UseStorage(value){
    let valueFromProps = value
    window.localStorage.setItem("context",valueFromProps);
    window.sessionStorage.setItem("context",valueFromProps);
    return null
}

export default UseStorage