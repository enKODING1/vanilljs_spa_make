export class MainPage {
    constructor({
        router
    }) {
        this.router = router;
    }

    mount() {
        const button = document.querySelector('.main-button');
        button.onclick = () => {
            this.router.push('other');
        }
    }

    render() {
        return `<span>메인 페이지</span>
        <button type="button" class="main-button">Main Page</button>
`;
    }
}
