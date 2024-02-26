export default {
    title: 'Example/RhapSideDrawer',
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
    try {
        const sideDrawerButton = document.querySelector('#side-drawer-btn');
        const sideDrawer = document.querySelector('rhap-side-drawer');
        sideDrawerButton.addEventListener('click', () => {
            if (!sideDrawer.opened) {
                sideDrawer.open();
            }
        });
    } catch (error) {
        console.error('An error occurred while declaring sideDrawerButton:', error);
    }
</script>
`;
export const RhapSideDrawer = Template.bind({});
RhapSideDrawer.args = {
    htitle: 'This is my Title'
};
//# sourceMappingURL=rhap-side-drawer.stories.js.map
