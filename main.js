// promise vs callback -> promises can be chained, compared to callbacks where we should nest them

function promise() {

    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(), 1000);
    });

}


let variable = 5;
function scope() {
    return variable;
}

function func() {
    let variable = 6;

    console.log(scope());
    console.log(variable);
}
func();
