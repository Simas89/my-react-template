import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

let theme = createMuiTheme({
	overrides: {
		MuiCssBaseline: {
			'@global': {
				body: {
					backgroundColor: '#F4F4F4',
				},
			},
		},
	},
});
theme = responsiveFontSizes(theme);

export default theme;
