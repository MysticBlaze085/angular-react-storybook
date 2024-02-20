export default {
    // this creates a ‘Components’ folder and a ‘MyComponent’ subfolder
    title: 'Components/RhapSideDrawer',
    tags: ['autodocs'],
    argTypes: {
        htitle: 'Test',
    },
};
const Template = (args) => `
<button id="side-drawer-btn">Open Side Menu</button>
<rhap-side-drawer htitle="${args.htitle}">
    <nav class="side-nav">
        <ul>
            <li><a href="/">A Link</a>
            <li><a href="/">Another Link</a>
            <li><a href="/">A Third Link</a>
        </ul>
    </nav>
</rhap-side-drawer>
<script>
    const sideDrawerButton = document.querySelector('#side-drawer-btn');
    const sideDrawer = document.querySelector('rhap-side-drawer');
    sideDrawerButton.addEventListener('click', () => {
        if (!sideDrawer.open) {
            sideDrawer.open = true;
        }
    });
</script>
`;
export const RhapSideDrawer = Template.bind({});
RhapSideDrawer.args = {
    htitle: 'This is my Title'
};