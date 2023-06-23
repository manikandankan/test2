import * as react_jsx_runtime from 'react/jsx-runtime';

interface HeaderProps {
    /**
     * The name of the application to display in the site header
     */
    applicationName: string;
    /**
     * The URL for the users avatar image
     */
    avatar?: string;
    /**
     * On click function for popover
     */
    onClickFunc?: () => void;
}
declare const Header: ({ applicationName, avatar, onClickFunc }: HeaderProps) => react_jsx_runtime.JSX.Element;

export { Header };
