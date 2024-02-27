export declare class RhapSideDrawer {
    showContactInfo: boolean;
    htitle: string;
    opened: boolean;
    onCloseDrawer(): void;
    onContentChange(content: string): void;
    open(): Promise<void>;
    render(): any[];
}
