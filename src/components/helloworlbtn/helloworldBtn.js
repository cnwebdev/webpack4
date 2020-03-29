import './helloWorldBtn.scss';

class HelloBtn {
    buttonCssClass = 'helloWorldBtn';

    render() {
        const button = document.createElement('button');
        const body = document.querySelector('body');
        button.innerHTML = 'Hello World!';
        button.classList.add(this.buttonCssClass);
        button.onclick = () => {
            const p = document.createElement('p');
            p.innerHTML = 'Hello World!';
            p.classList.add('helloWorldText');
            body.appendChild(p);
        }

        body.appendChild(button);
    }
}

export default HelloBtn;