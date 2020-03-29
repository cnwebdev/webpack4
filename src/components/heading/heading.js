import './heading.scss';

class Heading {
    render() {
        const wp = document.createElement('h1');
        const body = document.querySelector('body');
        wp.innerHTML = 'Webpack is awesome!';
        body.appendChild(wp);
    }
}

export default Heading;