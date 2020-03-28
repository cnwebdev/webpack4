import './helloWorldBtn.css';

class HelloBtn {
    render() {
        const button = document.createElement('button');
        button.innerHTML = 'Hello World!';
        button.classList.add('helloWorldBtn');
        const body = document.querySelector('body');
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