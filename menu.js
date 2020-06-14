function expand(){
    if(document.querySelector('#itensMenu').className == 'expand'){

        document.querySelector('#itensMenu').setAttribute('class', 'retract')
        document.querySelector('#spinner').setAttribute('class', 'rotateRight')
    } else {
        document.querySelector('#itensMenu').setAttribute('class', 'expand')
        document.querySelector('#spinner').setAttribute('class', 'rotateLeft')
    }
}
