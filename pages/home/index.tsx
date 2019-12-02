//#region Global Imports
import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
//#endregion Global Imports

//#region Local Imports
// import { Heading } from '@Components';
import { Navbar } from '@Components';
import { HomeActions } from '@Actions';
import { withI18next } from '../../src/withI18next';
import './index.scss';
//#region Local Imports

//#region Interface Imports
import { IHomePage, IStore } from '@Interfaces';
//#endregion Interface Imports

export class HomePage extends React.Component<IHomePage.IProps, IHomePage.IState> {
	constructor(props: IHomePage.IProps) {
		super(props);
	}

	public render(): JSX.Element {
		const { t, i18n } = this.props;

		return (
			<React.Fragment>
				<Navbar text={t('common:Hello')} handleLanguageChange={(lang) => this.changeLanguage(lang)} />
				<div className="hero">
					<h1>Open Pocket</h1>
				</div>
			</React.Fragment>
		);
	}

	private changeLanguage(lang: string): void {
		this.props.i18n.changeLanguage(lang);
	}
}

const mapStateToProps = (state: IStore) => state.home;

const mapDispatchToProps = (dispatch: Dispatch) => ({
	Map: bindActionCreators(HomeActions.Map, dispatch),
});

const Extended = withI18next(['common'])(HomePage);

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(Extended);
