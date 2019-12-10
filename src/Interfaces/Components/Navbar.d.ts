//#region Global Imports
import { Props } from 'prop-types';
//#endregion Global Imports

declare module INavbar {
    export interface IProps extends Props<{}> {
        text: string;
    }
    
    export interface IState {}
}